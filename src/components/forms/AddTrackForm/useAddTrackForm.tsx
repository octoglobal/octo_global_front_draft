import {useAppDispatch} from '@/hooks/useReduxHooks';
// import {IUserLoginReq} from '@/reducers/userSlice/asyncActions/userApi';
import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
// import {fetchAddOrders} from '@/reducers/ordersSlice/asyncActions/orderApi';
import {IAddOrder} from '../../../types/types';
// import {useCustomRouter} from '@/hooks/useCustomRouter';

import {UseFormReset} from 'react-hook-form';

export const useAddTrackForm = (
	reset : UseFormReset<IAddOrder>,
	successSubmit: () => void,
	setError: UseFormSetError<FieldValues | IAddOrder>
) => {

	const dispatch = useAppDispatch();
	// const {pushTo} = useCustomRouter();
	//
	const setErrorFields = (fieldName: keyof IAddOrder, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
		});
	};
	//
	// const handleBadResponse = () => {
	// 	setErrorFields('email', ' ');
	// 	setErrorFields('password', 'Неправильный логин или пароль');
	// };

	const handleBadAlreadyExist = () => {
		setErrorFields('track_number', 'Такой трек-номер уже существует');
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const formData = data as IAddOrder;

		if (formData.title && formData.track_number) {
			// dispatch(fetchAddOrders(formData))
			// 	.then(e => {
			// 		console.log('fetchAddOrders-e: ', e);
			//
			// 		const statusCode = e.payload;
			// 		console.log('statusCode: ', statusCode);
			// 		switch (statusCode) {
			// 		case 403:
			// 			// handleBadResponse();
			// 			return;
			// 		case 409:
			// 			handleBadAlreadyExist();
			// 			return;
			// 		case 422:
			// 			// handleBadResponse();
			// 			return;
			// 		case 200:
			// 			// pushTo('/');
			// 			reset({
			// 				title: '',
			// 				track_number: '',
			// 				comment: ''
			// 			});
			// 			successSubmit();
			// 		}
			// 	});
		}
	};

	return {
		onSubmit,
	};
};
