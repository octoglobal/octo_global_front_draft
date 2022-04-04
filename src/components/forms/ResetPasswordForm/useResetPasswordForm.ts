import {FieldValues, SubmitHandler} from 'react-hook-form';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchRecoveryMessage} from '@/reducers/userSlice/asyncActions/userApi';
import {IRecoveryMessage} from '../../../types/types';

export const useResetPasswordForm = () => {
	const dispatch = useAppDispatch();

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		const formData = data as IRecoveryMessage;
		console.log('formData: ', formData);
		if(formData.email) {
			dispatch(fetchRecoveryMessage(formData));
		}
	};

	return {
		onSubmit,
	};
};
