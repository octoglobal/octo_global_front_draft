import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {
	fetchUserLogin,
	fetchUserRegistration,
	IUserRegistrationReq,
} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';

export const useSignUp = (setError: UseFormSetError<FieldValues | IUserRegistrationReq>) => {

	const dispatch = useAppDispatch();
	const setErrorFields = (fieldName: keyof IUserRegistrationReq, message: string) => {
		setError(fieldName, {
			type: 'string',
			message: message
		});
	};

	const handleBadResponse = (message: string) => {
		setErrorFields('name', ' ');
		setErrorFields('surname', ' ');
		setErrorFields('email', ' ');
		setErrorFields('password', ' ');
		setErrorFields('confirmPassword', message);
	};


	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const formData = data as IUserRegistrationReq;
		const regResponse = await fetchUserRegistration(formData);
		if (regResponse?.status) {
			if (regResponse.status == 409) {
				handleBadResponse('Пользователь с такой почтой уже существует');
			}
			if (regResponse.status == 422) {
				handleBadResponse('Заполните все поля для регистрации');
			}
		}
		if (regResponse === 'user successfully created') {
			dispatch(fetchUserLogin({
				email: formData.email,
				password: formData.password
			}));
		}
	};

	return {
		onSubmit
	};
};
