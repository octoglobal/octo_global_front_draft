import React, {ChangeEvent, FC, useEffect, useMemo} from 'react';

import ReviewsAuthPlug from './ReviewsAuthPlug/ReviewsAuthPlug';
import ReviewsList from './ReviewsList/ReviewsList';
import CustomPagination from '../AnyPage/CustomPagination/CustomPagination';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import ReviewAddForm from '../../components/forms/ReviewAddForm/ReviewAddForm';

import {useReviewStyle} from './style';
import {useUserStore} from '@/hooks/useUserStore';
import {useMobile} from '@/hooks/useMedia';
import {useReviewsStore} from '@/hooks/useReviewsStore';
import {setCurrentPage, setIntervalShow } from '@/store/reducers/reviewsSlice/reviewsSlice';
import {useAppDispatch} from "@/hooks/useReduxHooks";

const ReviewPage: FC = () => {
	const {
		ReviewContentMUI,
		ReviewBottomMUI,
		PaginationWrappMUI
	} = useReviewStyle();

	const {isMobile} = useMobile();
	const {isAuth} = useUserStore();
	const dispatch = useAppDispatch();

	const {
		reviews,
		pagesCount,
		pagesGet,
		limitShow,
		currentPage,
		startShow,
		endShow,
		getReviews,
	} = useReviewsStore();

	useEffect(() => {
		getReviews();
	}, []);

	const reviewsPage = useMemo(
		() => reviews.slice(startShow, endShow),
		[reviews, startShow, endShow]
	);

	// console.log('startShow, endShow: ', reviews, reviewsPage, startShow, endShow);

	const handlerPaginationChange = (event: ChangeEvent<unknown>, value: number) => {
		// console.log('value: ', value);
		dispatch(setCurrentPage(value));
		dispatch(setIntervalShow(value));
	};

	// console.log('reviewsPage: ', reviewsPage);

	useEffect(() => {
		// console.log('currentPage: ', currentPage);
		if(currentPage >= 3) {
			getReviews();
		}
	}, [currentPage]);

	return (
		<ReviewContentMUI>
			<ReviewsList
				reviews={reviewsPage}
			/>
			<ReviewBottomMUI>
				{!isMobile ? (
					<>
						<FormComponent
							title='Оставьте отзыв'
							background={false}
						>
							<ReviewAddForm/>
						</FormComponent>

						<PaginationWrappMUI>
							<CustomPagination
								onChange={handlerPaginationChange}
								count={pagesCount}
								page={currentPage}
							/>
						</PaginationWrappMUI>
					</>
				) : (
					isAuth ? <ReviewAddForm/> : <ReviewsAuthPlug/>
				)}
			</ReviewBottomMUI>
		</ReviewContentMUI>
	);
};

export default React.memo(ReviewPage);
