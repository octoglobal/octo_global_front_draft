import {ChangeEvent, useEffect, useState} from 'react';
import {reviewsReset, setCurrentPage} from '@/reducers/reviewsSlice/reviewsSlice';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {useReviewsStore} from '@/hooks/useReviewsStore';
import {useLocalStorage} from '@/hooks/useLocalStorage';

export const useReviewPage = () => {

	const dispatch = useAppDispatch();
	const [defaultValue, setDefaultValue] = useState<string>('');

	const {getData, removeData} = useLocalStorage();
	const {
		getFirstReviews,
		getReviews,
	} = useReviewsStore();

	useEffect(() => {
		const pageLimit = window.innerWidth > 500 ? 6 : 50;
		dispatch(reviewsReset());
		getFirstReviews(pageLimit);

		const savedData = getData('savedReview');
		if(savedData) {
			setDefaultValue(savedData);
			removeData('savedReview');
		}
	}, []);



	const handlerPaginationChange = (event: ChangeEvent<unknown>, value: number) => {
		dispatch(setCurrentPage(value));
		getReviews(value);
	};

	return {
		defaultValue,
		handlerPaginationChange,
	};
};
