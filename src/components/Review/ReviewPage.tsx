import React, {FC} from 'react';

import {useMobile} from '@/hooks/useMedia';
import {useUserStore} from '@/hooks/useUserStore';
import ReviewsList from './ReviewsList/ReviewsList';
import {useReviewsStore} from '@/hooks/useReviewsStore';
import ReviewsAuthPlug from './ReviewsAuthPlug/ReviewsAuthPlug';
import CustomPagination from '../AnyPage/CustomPagination/CustomPagination';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import ReviewAddForm from '../../components/forms/ReviewAddForm/ReviewAddForm';

import {useReviewStyle} from './style';
import {useReviewPage} from '@/components/Review/useReviewPage';

const ReviewPage: FC = () => {
	const {isMobile} = useMobile();
	const {isAuth} = useUserStore();

	const {
		pagesCountFront,
		currentPage,
	} = useReviewsStore();

	const {
		defaultValue,
		handlerPaginationChange
	} = useReviewPage();

	return (
		<ReviewContentMUI>
			<ReviewsList />
			<ReviewBottomMUI>
				{!isMobile ? (
					<FormComponent
						title='Оставьте отзыв'
						background={false}
					>
						<ReviewAddForm defaultText={defaultValue} />
					</FormComponent>
				) : isAuth ? <ReviewAddForm defaultText={defaultValue} /> : <ReviewsAuthPlug/> }
				<PaginationWrappMUI>
					<CustomPagination
						page={currentPage}
						count={pagesCountFront}
						onChange={handlerPaginationChange}
						siblingCount={1}
					/>
				</PaginationWrappMUI>
			</ReviewBottomMUI>
		</ReviewContentMUI>
	);
};

export default React.memo(ReviewPage);

const {
	ReviewContentMUI,
	ReviewBottomMUI,
	PaginationWrappMUI
} = useReviewStyle();
