import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchUserLogin, IUserLoginReq} from '@/reducers/userSlice/asyncActions/userApi';
import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import { IUserModel } from '@/models/IUserModel';

export const useLogin = (setError: UseFormSetError<FieldValues | IUserLoginReq>) => {

	const dispatch = useAppDispatch();
	const {router, pushTo} = useCustomRouter();

	const setErrorFields = (fieldName: keyof IUserLoginReq, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
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

					if (statusCode == 403) {
						handleBadResponse();
						return;
					}
					if (statusCode == 422) {
						handleBadResponse();
						return;
					}

					const user = e.payload as {user: IUserModel};
					if (user.user.statusId === 9) {
						router.push('/account/orders/wait');
						return;
					}
					if(router.route === '/login') pushTo('/');
				});
		}
	};

	return {
		onSubmit,
	};
};
