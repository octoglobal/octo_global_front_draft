import {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {reviewsSlice} from '@/reducers/reviewsSlice/reviewsSlice';
import {fetchMoreReviews} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';

export const useReviewsList = () => {
	const {
		updateReviews,
		currentPage,
		reviewsEnd,
		isNewReviewsMobile
	} = useAppSelector(state => state.reviewsReducer);
	const dispatch = useAppDispatch();
	const containerRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLDivElement>(null);

	const onScroll = () => {
		const containerDOM = containerRef.current;
		const listDOM = listRef.current;

		if (containerDOM && listDOM) {
			const scrollTop = containerDOM.clientHeight + containerDOM.scrollTop;
			const height = listDOM.offsetHeight;
			if (scrollTop > height / 100 * 70) {
				dispatch(reviewsSlice.actions.updateReviews());
			}
		}
	};

	useEffect(() => {
		if (updateReviews && !reviewsEnd) {
			dispatch(fetchMoreReviews(
				{
					page: currentPage + 1,
					page_limit: 50
				})
			);
		}
	}, [updateReviews]);


	useEffect(() => {
		if (isNewReviewsMobile && containerRef.current) {
			containerRef.current.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
			dispatch(reviewsSlice.actions.changeNewReviewsMobile());
		}
	}, [isNewReviewsMobile]);


	return {
		listRef,
		onScroll,
		containerRef,
	};
};
