import {useState} from 'react';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {
	fetchUserRegistration,
	IUserRegistrationReq,
} from '@/reducers/userSlice/asyncActions/userRegistration';

export const useSignUp = () => {
	const [resError, setResError] = useState<string>('');

	const handleResetError = () => setResError('');

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const formData = data as IUserRegistrationReq;
		const regResponse = await fetchUserRegistration(formData);
		// Ошибка с бека
		console.log(regResponse);
		if (regResponse?.status) {
			if (regResponse.status == 409) {
				setResError('Пользователь с такой почтой уже существует');
			}
			if (regResponse.status == 422) {
				setResError('Заполните все поля для регистрации');
			}
		}
		if (regResponse === 'user successfully created') {
			console.log('Пользователь зарегестрирован');
		}
	};

	return {
		resError,
		handleResetError,
		onSubmit
	};
};
