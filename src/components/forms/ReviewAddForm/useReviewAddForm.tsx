import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {IReviewAddSubmit} from '../../../types/types';
import {fetchAddReviews} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {useReviewsStore} from '@/hooks/useReviewsStore';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useReviewAddForm = (setError: UseFormSetError<FieldValues>) => {

	const dispatch = useAppDispatch();
	const {isAuth} = useUserStore();
	const {pushTo} = useCustomRouter();
	const {getReviews} = useReviewsStore();

	const setErrorFields = (fieldName: keyof IReviewAddSubmit, message: string) => {
		setError(fieldName, {
			type: 'string',
			message
		});
	};

	const handleBadResponse = () => {
		setErrorFields('text', 'Поле не может быть пустым');
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if(!isAuth) {
			pushTo('/signup');
			return;
		}

		const formData  = data as IReviewAddSubmit;
		console.log('formData: ', formData);
		if(formData.text) {
			dispatch(fetchAddReviews(formData))
				.then(response => {
					console.log('response: ', response);
					const status = response.payload.message;
					if(status === 'success') {
						getReviews();
					}
				});
		}else {
			handleBadResponse();
		}
	};

	return {
		onSubmit,
	};
};
