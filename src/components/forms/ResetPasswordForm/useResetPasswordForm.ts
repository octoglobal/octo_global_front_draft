import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchRecoveryMessage, IUserLoginReq} from '@/reducers/userSlice/asyncActions/userApi';
import {IRecoveryMessage} from '../../../types/types';
import { useState } from 'react';

export const useResetPasswordForm = (setError: UseFormSetError<FieldValues>) => {
	
	const [openModal,changeOpenModal] = useState(false);
	const dispatch = useAppDispatch();

	const setErrorFields = (fieldName: keyof IUserLoginReq, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
		});
	};

	const handleUserNotFound = () => {
		setErrorFields('email', 'Пользователь не найден');
	};

	const handleBadResponse = () => {
		setErrorFields('email', 'Ошибка запроса, пожалуйста попробуйте позже');
	};

	const handleMoreRequest = () => {
		setErrorFields('email', 'Слишком много запросов');
	};

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		const formData = data as IRecoveryMessage;
		if(formData.email) {
			dispatch(fetchRecoveryMessage(formData))
				.then(response => {
					console.log('!!!!!!!!fetchRecoveryMessage',response.payload);
					const statusCode = response.payload;
					switch (statusCode) {
					case 403:
						handleUserNotFound();
						return;
					case 500:
						handleBadResponse();
						return;
					case 429:
						handleMoreRequest();
						return;
					case 200:
						console.log('!!!!200');
						changeOpenModal(true);
						return;
					default:
						// pushTo('/');
					}
				})
				.catch(error => {
					changeOpenModal(false);
					console.log('error: ', error);
				});
		}
	};

	return {
		onSubmit,
		openModal,
		changeOpenModal,
	};
};
