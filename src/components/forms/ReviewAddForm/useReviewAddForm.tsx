import {useState} from 'react';
import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';

import {useUserStore} from '@/hooks/useUserStore';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {IReviewAddSubmit} from '../../../types/types';
import {fetchAddReviews} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {TAddReview} from '../../../types/types';
// import {useCustomSize} from '@/hooks/useMedia';
import {useLocalStorage} from '@/hooks/useLocalStorage';
import {useReviewsStore} from '@/hooks/useReviewsStore';

export const useReviewAddForm = (
	successSubmit: () => void,
	setError: UseFormSetError<FieldValues | TAddReview>,
	// reset?: UseFormReset<IReviewAddSubmit>,
) => {
	const [showPromt, setShowPromt] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const {isAuth} = useUserStore();
	const {pushTo} = useCustomRouter();
	const {setData} = useLocalStorage();

	const {
		currentPage,
		getReviews,
	} = useReviewsStore();

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

		if(formData.text) {
			dispatch(fetchAddReviews(formData))
				.then(response => {
					const status = response.payload.message;
					if(status === 'success') {
						successSubmit();
					}
				});
		}else {
			handleBadResponse();
		}
	};

	return {
		pushTo,
		isAuth,
		onSubmit,
		setData,
		showPromt, setShowPromt,
		currentPage,
		getReviews,
	};
};
