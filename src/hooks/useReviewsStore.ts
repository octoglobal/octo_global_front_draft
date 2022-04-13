import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import { fetchReviews } from '@/store/reducers/reviewsSlice/asyncActions/reviewsApi';

export const useReviewsStore = () => {
	const dispatch = useAppDispatch();
	const {
		pagesCountFront,
		reviews,
		limitShow,
		currentPage,
		pagesCount,
		pagesGet
	} = useAppSelector(state => state.reviewsReducer);

	const fetchAllReviews = (page?: number) : void => {
		dispatch(fetchReviews({page: page ? page : pagesGet}));
	};

	const fetchFirstReviews = () : void => {
		dispatch(fetchReviews({page : 1}));
	};

	return {
		pagesCountFront,
		reviews,
		pagesCount,
		pagesGet,
		limitShow,
		currentPage,
		getFirstReviews: fetchFirstReviews,
		getReviews: fetchAllReviews,
	};
};
