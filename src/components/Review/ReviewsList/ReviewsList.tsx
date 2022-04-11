import React, {FC} from 'react';

import ReviewItem from '../ReviewItem/ReviewItem';
import {useReviewListStyle} from '@/components/Review/ReviewsList/style';

import ReviewsArray from '../ReviewsMockData.json';
import {IReview} from '../../../types/types';

const ReviewsList : FC = () => {

	const {
		ReviewsContentMUI
	} = useReviewListStyle();

	const mockArrayReview = ReviewsArray as IReview[];

	return (
		<ReviewsContentMUI>
			{mockArrayReview.map(item => (
				<ReviewItem
					key={item.id}
					id={item.id}
					name={item.name}
					time={item.time}
					comment={item.comment}
				/>
			))}
		</ReviewsContentMUI>
	);
};

export default React.memo(ReviewsList);
