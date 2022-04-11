import React, {FC} from 'react';

import ReviewsList from './ReviewsList/ReviewsList';
import CustomPagination from '../AnyPage/CustomPagination/CustomPagination';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import ReviewAddForm from '../../components/forms/ReviewAddForm/ReviewAddForm';

import {useReviewStyle} from './style';

const ReviewPage: FC = () => {
	const {
		ReviewContentMUI,
		ReviewBottomMUI
	} = useReviewStyle();

	return (
		<ReviewContentMUI>
			<ReviewsList/>
			<ReviewBottomMUI>
				<FormComponent
					title='Оставьте отзыв'
					background={false}
				>
					<ReviewAddForm/>
				</FormComponent>
				<CustomPagination/>
			</ReviewBottomMUI>
		</ReviewContentMUI>
	);
};

export default React.memo(ReviewPage);
