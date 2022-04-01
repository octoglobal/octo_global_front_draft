import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchUserLogin, IUserLoginReq} from '@/reducers/userSlice/asyncActions/userApi';
import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {useCustomRouter} from '@/hooks/useCustomRouter';

export const useLogin = (setError: UseFormSetError<FieldValues | IUserLoginReq>) => {

	const dispatch = useAppDispatch();
	const {pushTo} = useCustomRouter();

	const setErrorFields = (fieldName: keyof IUserLoginReq, message: string) => {
		setError(fieldName, {
			type: 'string',
			message: message
		});
	};

	const handleBadResponse = () => {
		setErrorFields('email', ' ');
		setErrorFields('password', 'Неправильный логин или пароль');
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const formData = data as IUserLoginReq;
		if (formData.email && formData.password) {
			dispatch(fetchUserLogin(formData))
				.then(e => {
					const statusCode = e.payload;
					switch (statusCode) {
					case 403:
						handleBadResponse();
						return;
					case 422:
						handleBadResponse();
						return;
					default:
						pushTo('/');
					}
				});
		}
	};


	return {
		onSubmit,
	};
};
