import React, {FC} from 'react';

import ReviewPagination from './ReviewPagination/ReviewPagination';
import ReviewAddForm from '../../components/forms/ReviewAddForm/ReviewAddForm';
import ReviewsList from './ReviewsList/ReviewsList';
import ContentLayout from '../../layout/ContentLayout/ContentLayout';
import {useReviewStyle} from './style';

const ReviewPage : FC = () => {

	const {
		ReviewContentMUI,
		ReviewBottomMUI
	} = useReviewStyle();

	return (
		<ContentLayout>
			<ReviewContentMUI>
				<ReviewsList />
				<ReviewBottomMUI>
					<ReviewAddForm />
					<ReviewPagination />
				</ReviewBottomMUI>
			</ReviewContentMUI>
		</ContentLayout>
	);
};

export default React.memo(ReviewPage);
