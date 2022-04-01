import { FieldValues, SubmitHandler } from 'react-hook-form';
import {
	IUserAddresReq,
	fetchAddAddress,
} from '@/reducers/userSlice/asyncActions/userApi';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import {fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';
import {AddressFetchObject} from '../../../types/types';
import { translit } from '@/lib/services/services';

export const useAddLocation = (
	// setError?: UseFormSetError<FieldValues | IUserAddresReq>
) => {
	const dispatch = useAppDispatch();

	//
	// const setErrorFields = (fieldName: keyof IUserAddresReq, message: string) => {
	// 	setError(fieldName, {
	// 		type: 'string',
	// 		message: message
	// 	});
	// };
	//
	// const handleBadResponse = () => {
	// 	setErrorFields('');
	// 	setErrorFields('');
	// 	setErrorFields('');
	// 	setErrorFields('');
	// };

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const formData = data as IUserAddresReq;
		// TODO: добавить проверки и всякие дополнения к данным формы
		console.log('formData: ', formData);

		const sendObject : AddressFetchObject = {
			name: formData.name,
			surname: formData.surname,
			address_string: formData.address,
			phone: formData.phone,
			latitude: '4.5321',
			longitude: '98.7456',
		};

		const sO2 : AddressFetchObject = {
			name: translit(formData.name),
			surname: translit(formData.surname),
			address_string: formData.address,
			phone: formData.phone,
			latitude: '4.5321',
			longitude: '98.7456',
		};

		console.log('sendObject: ', sendObject);
		console.log('sO2: ', sO2);

		if (formData.name && formData.surname && formData.phone && formData.address) {
			dispatch(fetchAddAddress(sO2)).then((e) => {
				const statusCode = e.payload;

				console.log('statusCode: ', statusCode);
				// switch (statusCode) {
				// 	case 403:
				// 		handleBadResponse();
				// 		return;
				// 	case 422:
				// 		handleBadResponse();
				// }

				dispatch(fetchUserAutoLogin());
			});
		}
	};

	return {
		onSubmit,
	};
};
