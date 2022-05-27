import { FieldValues, SubmitHandler, UseFormSetError, UseFormReset } from 'react-hook-form';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchRecoveryMessage, IUserLoginReq} from '@/reducers/userSlice/asyncActions/userApi';
import {IRecoveryMessage} from '../../../types/types';
import { useState } from 'react';



export const useResetPasswordForm = (setError: UseFormSetError<FieldValues>,reset:UseFormReset<FieldValues>) => {

	
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
						changeOpenModal(true);
						reset({});					
						return;
					default:
						// pushTo('/');
					}
				})
				.catch(() => {
					changeOpenModal(false);
				
				});
		}
	};

	return {
		onSubmit,
		openModal,
		changeOpenModal,
	};
};
