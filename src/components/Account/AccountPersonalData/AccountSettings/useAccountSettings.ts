import {useCallback} from 'react';

import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
// import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {
	fetchChangePassword,
	fetchChangeUser,
	fetchUserAutoLogin, fetchVerificMessage,
} from '@/reducers/userSlice/asyncActions/userApi';
import {IAccountUpdateUser, IUpdatePassword, IUpdatePhone} from '../../../../types/types';
import {useState} from 'react';

export const useAccountSettings = (setError: UseFormSetError<FieldValues>, verifiedEmail?: boolean) => {

	const dispatch = useAppDispatch();

	const [showEmailPromt, setShowPromt] = useState(!verifiedEmail);

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

		const sendObject : IUpdatePhone = {
			phone: formData.phone
		};

		if(sendObject.phone) {
			dispatch(fetchChangeUser(sendObject))
				.then(e => {
					const statusCode = e.payload;
					switch (statusCode) {
					case 403:
						handleBadResponseUser();
						return;
					case 422:
						handleBadResponseUser();
						return;
					default:
						dispatch(fetchUserAutoLogin());
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

		const sendObject : IUpdatePassword = {
			old_password: formData.oldPassword,
			new_password: formData.newPassword,
		};

		if(formData.oldPassword && formData.newPassword) {
			dispatch(fetchChangePassword(sendObject))
				.then(e => {
					const statusCode = e.payload;
					console.log('statusCode: ', statusCode);
					switch (statusCode) {
					case 403:
						handleBadResponsePassword();
						return;
					case 422:
						handleBadResponseUser();
						return;
					default:
						dispatch(fetchUserAutoLogin());
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
		showEmailPromt
	};
};
