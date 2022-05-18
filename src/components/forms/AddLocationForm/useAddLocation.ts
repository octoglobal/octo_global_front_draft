import { useState } from 'react';
import { fetchUserAdmin } from '@/reducers/adminSlice/asyncThunk/adminApi';
import { fetchAddAddressAdminForUser } from './../../../store/reducers/userSlice/asyncActions/userApi';
import {
	IUserAddresReq,
	fetchAddAddress
} from '@/reducers/userSlice/asyncActions/userApi';
import {fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import {AddressFetchObject} from '../../../types/types';
import { translit } from '@/lib/services/services';


export interface IAddressModelSendAdmin {
    readonly userId: number,
    readonly name: string,
    readonly surname: string,
    readonly latitude: string,
    readonly phone: string,
    readonly longitude: string,
    readonly address_string: string,
}

export const useAddLocation = (
	// setError?: UseFormSetError<FieldValues | IUserAddresReq>
) => {
	const dispatch = useAppDispatch();
	const [ errAdd, setErrAdd] = useState(false);
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

	const onSubmit = async (data:object, isAdmin?:boolean,userId?:number) => {
		
		const formData = data as IUserAddresReq;
		// TODO: добавить проверки и всякие дополнения к данным формы

		
		
		if (formData.name && formData.surname && formData.phone && formData.address) {
			
			if (isAdmin && userId){	
				let err = null;			
				const sendObject: IAddressModelSendAdmin = {
					userId: userId,
					name: translit(formData.name),
					surname: translit(formData.surname),
					address_string: formData.address,
					phone: formData.phone,
					latitude: '',
					longitude: '',
				};
				
			 await	dispatch(fetchAddAddressAdminForUser(sendObject)).then((e) => {
					const statusCode = e.payload as {status:number};
					console.log(e);
					// switch (statusCode) {
					// 	case 403:
					// 		handleBadResponse();
					// 		return;
					// 	case 422:
					// 		handleBadResponse();
					// }
					if (statusCode.status !== 200){
						
						err = true;
						setErrAdd(true);
					}
					dispatch(fetchUserAdmin({userId:userId}));
				});
				return err;

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
		setErrAdd,
		errAdd
	};
};
