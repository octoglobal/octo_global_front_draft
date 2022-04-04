import {FieldValues, SubmitHandler} from 'react-hook-form';
import {fetchRecoveryPassword} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {ISendRecoveryPass} from '../../../types/types';

export const useRepeatPasswordForm = (token : string) => {

	const dispatch = useAppDispatch();
	const {pushTo} = useCustomRouter();

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		const formData = data;

		const sendObject : ISendRecoveryPass = {
			token: token,
			password: formData.password
		};

		if (formData.password && formData.repeatPassword && formData.password === formData.repeatPassword) {
			dispatch(fetchRecoveryPassword(sendObject))
				.then(e => {
					const statusCode = e.payload;
					switch (statusCode) {
					case 403:
						// handleBadResponse();
						return;
					case 422:
						// handleBadResponse();
						return;
					default:
						pushTo('/login');
					}
				});
		}
	};

	return {
		onSubmit
	};
};
