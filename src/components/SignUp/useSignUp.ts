import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {
	fetchUserLogin,
	fetchUserRegistration,
	IUserRegistrationReq,
} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {ucFirst} from '@/services/services';

export const useSignUp = (setError: UseFormSetError<FieldValues | IUserRegistrationReq>) => {

	const {pushTo} = useCustomRouter();

	const dispatch = useAppDispatch();
	const setErrorFields = (fieldName: keyof IUserRegistrationReq, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
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

		const sendObject : IUserRegistrationReq = {
			...formData,
			name: ucFirst(formData.name),
			surname: ucFirst(formData.surname),
		};

		const regResponse = await fetchUserRegistration(sendObject);
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
			}))
				.then(() => {
					pushTo('/welcome');
				});
		}
	};

	return {
		onSubmit
	};
};
