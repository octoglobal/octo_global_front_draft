import {FieldValues, SubmitHandler} from 'react-hook-form';
// import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchChangeUser, fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';

export const useAccountSettings = () => {

	const dispatch = useAppDispatch();

	// const {
	// 	user: {
	// 		// name, surname
	// 	},
	// } = useUserStore();

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		const formData = data;
		delete formData.oldPassword;
		delete formData.newPassword;
		delete formData.email;

		const sendObject = {
			// name: name,
			// surname: surname,
			phone: formData.phone
		};

		// if(sendObject.name && sendObject.surname && sendObject.phone) {
		if(sendObject.phone) {
			dispatch(fetchChangeUser(sendObject))
				.then(e => {
					//TODO: обработать statusCode
					const statusCode = e.payload;
					console.log('statusCode: ', statusCode);
					dispatch(fetchUserAutoLogin());
				});
		}
	};

	return {
		onSubmit,
	};
};
