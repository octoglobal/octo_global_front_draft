import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
// import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {
	fetchChangePassword,
	fetchChangeUser,
	fetchUserAutoLogin,
} from '@/reducers/userSlice/asyncActions/userApi';
import {IUpdatePassword} from '../../../../types/types';

export const useAccountSettings = (setError: UseFormSetError<FieldValues>) => {

	const dispatch = useAppDispatch();

	const onSubmitUser : SubmitHandler<FieldValues> = (data) => {
		const formData = data;
		delete formData.oldPassword;
		delete formData.newPassword;
		delete formData.email;

		const sendObject = {
			// name: name,
			// surname: surname,
			phone: formData.phone
		};

		// if(sendObject.name && sendObject.surname && sendObject.phone) {
		if(sendObject.phone) {
			dispatch(fetchChangeUser(sendObject))
				.then(e => {
					//TODO: обработать statusCode
					const statusCode = e.payload;
					console.log('statusCode: ', statusCode);
					dispatch(fetchUserAutoLogin());
				});
		}
	};

	const setErrorFields = (fieldName: string, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
		});
		console.log(fieldName, message);
	};

	const handleBadResponse = () => {
		setErrorFields('oldPassword', 'Пароль не совпадает');
		setErrorFields('newPassword', '');
	};

	const onSubmitPassword : SubmitHandler<FieldValues> = (data) => {
		const formData = data;

		const sendObject : IUpdatePassword = {
			old_password: formData.oldPassword,
			new_password: formData.newPassword,
		};

		if(formData.oldPassword && formData.newPassword && formData.oldPassword === formData.newPassword) {
			dispatch(fetchChangePassword(sendObject))
				.then(e => {
					//TODO: обработать statusCode
					const statusCode = e.payload;
					console.log('statusCode: ', statusCode);
					dispatch(fetchUserAutoLogin());
				});
		}else{
			handleBadResponse();
		}
	};

	return {
		onSubmitUser,
		onSubmitPassword
	};
};
