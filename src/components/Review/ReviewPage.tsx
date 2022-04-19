import React, {FC} from 'react';
import ReviewsList from './ReviewsList/ReviewsList';
import {useReviewsStore} from '@/hooks/useReviewsStore';
import CustomPagination from '../AnyPage/CustomPagination/CustomPagination';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import ReviewAddForm from '../../components/forms/ReviewAddForm/ReviewAddForm';

import {useReviewStyle} from './style';
import {useReviewPage} from '@/components/Review/useReviewPage';
import {useMediaQuery} from '@mui/material';

const ReviewPage: FC = () => {
	const isTablet = useMediaQuery('(max-width: 768px)');
	const isMobile = useMediaQuery('(max-width: 500px)');

	const {
		pagesCountFront,
		currentPage,
	} = useReviewsStore();

	const {
		defaultValue,
		handlerPaginationChange
	} = useReviewPage();

	return (
		<>
			<ReviewContentMUI>
				<ReviewsList isMobile={isMobile}/>
				<ReviewBottomMUI>
					{!isTablet ? (
						<FormComponent
							title='Оставьте отзыв'
							background={false}
						>
							<ReviewAddForm defaultText={defaultValue}/>
						</FormComponent>
					) : <ReviewAddForm defaultText={defaultValue}/>}
					{!isMobile && (
						<PaginationWrappMUI>
							<CustomPagination
								page={currentPage}
								count={pagesCountFront}
								onChange={handlerPaginationChange}
								siblingCount={1}
							/>
						</PaginationWrappMUI>
					)}
				</ReviewBottomMUI>
			</ReviewContentMUI>
		</>
	);
};

export default React.memo(ReviewPage);

const {
	ReviewContentMUI,
	ReviewBottomMUI,
	PaginationWrappMUI
} = useReviewStyle();
