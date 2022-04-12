import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import { fetchReviews } from '@/store/reducers/reviewsSlice/asyncActions/reviewsApi';

export const useReviewsStore = () => {
	const dispatch = useAppDispatch();
	const {
		pagesCountFront,
		reviews,
		limitShow,
		currentPage,
		startShow,
		endShow,
		pagesCount,
		pagesGet
	} = useAppSelector(state => state.reviewsReducer);

	const fetchAllReviews = () : void => {
		// console.log('fetchReviews');
		dispatch(fetchReviews({page: pagesGet}));
	};

	return {
		pagesCountFront,
		reviews,
		pagesCount,
		pagesGet,
		limitShow,
		currentPage,
		startShow,
		endShow,
		getReviews: fetchAllReviews
	};
};
