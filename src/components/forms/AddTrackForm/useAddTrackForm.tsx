import {useAppDispatch} from '@/hooks/useReduxHooks';
// import {IUserLoginReq} from '@/reducers/userSlice/asyncActions/userApi';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {fetchAddOrders} from '@/reducers/ordersSlice/asyncActions/orderApi';
import {IAddOrder} from '../../../types/types';
// import {useCustomRouter} from '@/hooks/useCustomRouter';

import {UseFormReset} from 'react-hook-form';

export const useAddTrackForm = (reset : UseFormReset<IAddOrder>) => {

	const dispatch = useAppDispatch();
	// const {pushTo} = useCustomRouter();
	//
	// const setErrorFields = (fieldName: keyof IUserLoginReq, message: string) => {
	// 	setError(fieldName, {
	// 		type: 'string',
	// 		message
	// 	});
	// };
	//
	// const handleBadResponse = () => {
	// 	setErrorFields('email', ' ');
	// 	setErrorFields('password', 'Неправильный логин или пароль');
	// };

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const formData = data as IAddOrder;

		if (formData.title && formData.track_number) {
			dispatch(fetchAddOrders(formData))
				.then(e => {
					const statusCode = e.payload;
					console.log(statusCode);
					console.log(e);
					switch (statusCode) {
					case 403:
						// handleBadResponse();
						return;
					case 422:
						// handleBadResponse();
						return;
					default:
						// pushTo('/');
						reset({
							title: '',
							track_number: '',
							comment: ''
						});
					}
				});
		}
	};

	return {
		onSubmit,
	};
};
