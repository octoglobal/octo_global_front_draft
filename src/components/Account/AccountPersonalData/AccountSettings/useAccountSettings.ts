import {useCallback} from 'react';

import {FieldValues, SubmitHandler, UseFormReset, UseFormSetError} from 'react-hook-form';
// import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {
	fetchChangePassword,
	fetchChangeUser,
	fetchUserAutoLogin, fetchVerificMessage,
} from '@/reducers/userSlice/asyncActions/userApi';
import {IAccountUpdateUser, IUpdatePassword} from '../../../../types/types';
import {useState} from 'react';
import {useUserStore} from '@/hooks/useUserStore';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';

export const useAccountSettings = (setError: UseFormSetError<FieldValues>, verifiedEmail?: boolean, reset?: UseFormReset<FieldValues>) => {

	const {
		isAdmin
	} = useUserStore();
	const {
		adminSwitchIdToUser,
		adminSwitchUserModel,
	} = useAppSelector(state => state.adminReducer);
	const dispatch = useAppDispatch();

	const [showEmailPromt, setShowPromt] = useState(!verifiedEmail);
	const [isSubmitFormSuccess, setSuccess] = useState(false);

	const handlerConfirmEmail = () => {
		fetchVerificMessage()
			.then(r => {
				console.log('r: ', r);
				console.log('statusCode: ', typeof r);
			})
			.catch(e => {
				const statusCode = e.response.status;
				switch (statusCode) {
				case 500:
					setError('email', {
						type: 'string',
						message: 'Ошибка сервера',
					});
					setShowPromt(false);
					return;
				case 429:
					setError('email', {
						type: 'string',
						message: 'Слишком много запросов',
					});
					setShowPromt(false);
					return;
				case 200:
					setShowPromt(false);
					return;
				}
			});
	};

	const handlerEditClick = useCallback((): void => {
		console.log('handlerEditClick');
	}, []);

	const handleBadResponseUser = () => {
		setErrorFields('phone', '');
	};

	const onSubmitUser : SubmitHandler<FieldValues> = (data) => {
		const formData = data as IAccountUpdateUser;
		const url = isAdmin ? `/admin/user/${adminSwitchIdToUser}` : '/user';
		const sendObject = {} as IAccountUpdateUser;

		if (formData.email != adminSwitchUserModel?.email) {
			sendObject.email = formData.email;
		}

		if (formData.phone != adminSwitchUserModel?.phone) {
			sendObject.phone = formData.phone;
		}

		if (formData.name != adminSwitchUserModel?.name) {
			sendObject.name = formData.name;
		}

		if (formData.surname != adminSwitchUserModel?.surname) {
			sendObject.surname = formData.surname;
		}

		if(sendObject?.phone || sendObject?.email || sendObject?.name || sendObject?.surname) {
			dispatch(fetchChangeUser({data: sendObject, url: url}))
				.then(e => {
					const response = e.payload as {data: {status?: number, data?: string, message?: 'success', changes?: {name?: boolean, surname?: boolean, phone?: boolean, email?: boolean}}};
					const statusCode = response?.data.status;
					switch (statusCode) {
					case 403:
						handleBadResponseUser();
						return;
					case 422:
						handleBadResponseUser();
						return;
					case 409:
						if (response.data == 'user with this phone already exists') {
							setError('phone', {type: 'string', message: 'Номер телефона занят'});
						}
						if (response.data == 'user with this email already exists') {
							setError('email', {type: 'string', message: 'Почта занята'});
						}
						return;
					default:
						if (response?.data.message == 'success') {
							const emailField = response?.data?.changes?.email;
							const phoneField = response?.data?.changes?.phone;
							const currentPhone = adminSwitchUserModel?.phone ? adminSwitchUserModel?.phone : '';
							const currentEmail = adminSwitchUserModel?.email ? adminSwitchUserModel?.email : '';
							const isUseEmail = typeof emailField === 'boolean' && !emailField;
							const isUserPhone = typeof phoneField === 'boolean' && !phoneField;

							if (!isAdmin) {
								dispatch(fetchUserAutoLogin());
							}

							if (reset) {
								reset({
									phone: !isUserPhone ? formData.phone : currentPhone,
									email: !isUseEmail ? formData.email : currentEmail,
									name: formData.name,
									surname: formData.surname,
								});
							}

							if (isUseEmail) {
								setError('email', {type: 'string', message: 'Почта занята'});
							}
							if (isUserPhone) {
								setError('phone', {type: 'string', message: 'Номер телефона занят'});
							}

							if (isAdmin) {
								dispatch(adminSlice.actions.changeEmailAndPhone(
									{
										phone: !isUserPhone ? formData.phone : currentPhone,
										email: !isUseEmail ? formData.email : currentEmail,
										name: formData.name ? formData.name : adminSwitchUserModel?.name as string,
										surname: formData.surname ? formData.surname : adminSwitchUserModel?.surname as string,
									}
								));
							}
						}
					}
				});
		}
	};

	const setErrorFields = (fieldName: string, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
		});
	};

	const handleBadResponsePassword = () => {
		setErrorFields('oldPassword', 'Пароль не совпадает');
		setErrorFields('newPassword', '');
	};

	const onSubmitPassword : SubmitHandler<FieldValues> = (data) => {
		const formData = data;
		const url = isAdmin ? `/admin/user/${adminSwitchIdToUser}` : '/password_change';
		
		if (isAdmin) {
			if (data.oldPassword !== data.newPassword) {
				handleBadResponsePassword();
				return;
			}
		}

		const sendObject : IUpdatePassword | {password: string} = isAdmin ? {
			password: formData.newPassword,
		} : {
			old_password: formData.oldPassword,
			new_password: formData.newPassword,
		};
		
		if(formData.oldPassword && formData.newPassword) {
			
			dispatch(fetchChangePassword({
				data: sendObject,
				url: url,
				isAdmin: isAdmin
			}))
				.then(e => {
					const statusCode = e.payload as {status:number} ;					
					switch (statusCode.status) {
					case 403 :					
						handleBadResponsePassword();
						return;
					case 422:
						handleBadResponseUser();
						return;
					case 200:						
						setSuccess(true);
						if (!isAdmin) dispatch(fetchUserAutoLogin());
						if (reset) {
							reset({
								oldPassword: '',
								newPassword: '',
							});
							setTimeout(()=>{
								setSuccess(false);
							},3000);
							
						}
						break;
					default:
						// setSuccess(true);
						// if (!isAdmin) dispatch(fetchUserAutoLogin());
						// if (reset) {
						// 	reset({
						// 		// oldPassword: '',
						// 		newPassword: '',
						// 	});
						// }
					}
				})
				.catch(e => {
					console.log('catch: ', e);
				});
		}
	};

	return {
		onSubmitUser,
		onSubmitPassword,
		handlerConfirmEmail,
		handlerEditClick,
		showEmailPromt,
		isSubmitFormSuccess
	};
};
