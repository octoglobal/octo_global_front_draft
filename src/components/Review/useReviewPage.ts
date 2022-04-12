import {ChangeEvent, useEffect} from 'react';
import {reviewsReset, setCurrentPage, setIntervalShow} from '@/reducers/reviewsSlice/reviewsSlice';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {useReviewsStore} from '@/hooks/useReviewsStore';

export const useReviewPage = () => {

	const dispatch = useAppDispatch();

	const {
		getFirstReviews,
		getReviews,
	} = useReviewsStore();

	useEffect(() => {
		dispatch(reviewsReset());
		getFirstReviews();
	}, []);

	const handlerPaginationChange = (event: ChangeEvent<unknown>, value: number) => {
		dispatch(setCurrentPage(value));
		dispatch(setIntervalShow(value));
		getReviews(value);
	};
	
	return {
		handlerPaginationChange,
	};
};
