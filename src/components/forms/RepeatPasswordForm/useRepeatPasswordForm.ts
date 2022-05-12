import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {fetchRecoveryPassword} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {IRepeatPasswordFormError, ISendRecoveryPass} from '../../../types/types';

export const useRepeatPasswordForm = (token : string, setError : UseFormSetError<FieldValues | IRepeatPasswordFormError>) => {

	const dispatch = useAppDispatch();
	const {pushTo} = useCustomRouter();

	const setErrorFields = (fieldName: keyof IRepeatPasswordFormError, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
		});
	};

	const handleBadResponse = (message: string) => {
		setErrorFields('password', ' ');
		setErrorFields('repeatPassword', message);
	};

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		const formData = data;

		const sendObject : ISendRecoveryPass = {
			token: token,
			password: formData.password
		};

		if (formData.password && formData.repeatPassword && formData.password === formData.repeatPassword) {
			dispatch(fetchRecoveryPassword(sendObject))
				.then(e => {
					const statusCode = e.payload;
					switch (statusCode) {
					case 403:
						// handleBadResponse();
						break;
						return;
					case 422:
						break;
						// handleBadResponse();
					case 409:
						handleBadResponse('Старый и новый пароль должны отличаться');
						break;
						return;
					default:
						pushTo('/login');
					}
				});
		}else {
			handleBadResponse('Пароли должны совпадать');
		}
	};

	return {
		onSubmit
	};
};
