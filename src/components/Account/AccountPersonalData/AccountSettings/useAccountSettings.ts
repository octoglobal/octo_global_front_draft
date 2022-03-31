import {FieldValues, SubmitHandler} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';

export const useAccountSettings = () => {

	const {
		user: { name, surname },
	} = useUserStore();

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		const formData = data;
		delete formData.oldPassword;
		delete formData.newPassword;
		delete formData.email;

		const sendObject = {
			name: name,
			surname: surname,
			phone: formData.phone
		};

		if(sendObject.name && sendObject.surname && sendObject.phone) {
			// dispatch(fetchChangeUser(sendObject))
				// .then(e => {
				//
				// })
		}

	};

	return {
		onSubmit,
	};
};
