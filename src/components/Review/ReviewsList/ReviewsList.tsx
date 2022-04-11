import React, {FC} from 'react';

import ReviewItem from '../ReviewItem/ReviewItem';
import {useReviewListStyle} from '@/components/Review/ReviewsList/style';

// import ReviewsArray from '../ReviewsMockData.json';
// import {IReview} from '../../../types/types';
import {IReviewsModel} from '@/models/IReviewsModel';

interface ReviewsList {
	reviews : IReviewsModel[] | []
}

const ReviewsList : FC<ReviewsList> = ({
	reviews
}) => {

	const {
		ReviewsContentMUI
	} = useReviewListStyle();

	// const mockArrayReview = ReviewsArray as IReview[];

	return (
		<ReviewsContentMUI>
			{reviews.map(item => (
				<ReviewItem
					key={item.createdTime}
					name={item.userName}
					time={item.createdTime}
					comment={item.text}
				/>
			))}
		</ReviewsContentMUI>
	);
};

export default React.memo(ReviewsList);
