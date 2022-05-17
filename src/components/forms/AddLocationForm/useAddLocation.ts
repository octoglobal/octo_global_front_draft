import { fetchUserAdmin } from '@/reducers/adminSlice/asyncThunk/adminApi';
import { IAddressModel } from '@/models/IAddressModel';
import { fetchAddAddressAdminForUser } from './../../../store/reducers/userSlice/asyncActions/userApi';
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

	const onSubmit = (data:object, isAdmin?:boolean,userId?:number) => {
		
		const formData = data as IUserAddresReq;
		// TODO: добавить проверки и всякие дополнения к данным формы

		
		
		if (formData.name && formData.surname && formData.phone && formData.address) {
			
			if (isAdmin){				
				const sendObject: IAddressModel = {
					userId: userId,
					name: translit(formData.name),
					surname: translit(formData.surname),
					address_string: formData.address,
					phone: formData.phone,
					latitude: '',
					longitude: '',
				};
				
				dispatch(fetchAddAddressAdminForUser(sendObject)).then((e) => {
					const statusCode = e.payload;
	
					console.log('statusCode fetchAddAddressAdminForUser: ', statusCode);				
					// switch (statusCode) {
					// 	case 403:
					// 		handleBadResponse();
					// 		return;
					// 	case 422:
					// 		handleBadResponse();
					// }
					
					dispatch(fetchUserAdmin({userId:userId}));
				});


			}else {
				const sendObject : AddressFetchObject = {
					name: translit(formData.name),
					surname: translit(formData.surname),
					address_string: formData.address,
					phone: formData.phone,
					latitude: '4.5321',
					longitude: '98.7456',
				};
				dispatch(fetchAddAddress(sendObject)).then((e) => {
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
			
		}
	};

	return {
		onSubmit,
	};
};
