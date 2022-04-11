import React, {FC} from 'react';
import {useReviewsAuthPlugStyles} from '@/components/Review/ReviewsAuthPlug/style';

const ReviewsAuthPlug : FC = () => {
	const {
		ReviewPlugContentMUI
	} = useReviewsAuthPlugStyles();

	return (
		<ReviewPlugContentMUI>
			Отзывы доступны после регистрации
		</ReviewPlugContentMUI>
	);
};

export default React.memo(ReviewsAuthPlug);
