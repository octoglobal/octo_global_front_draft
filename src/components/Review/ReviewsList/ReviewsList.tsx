import React, {FC} from 'react';

import ReviewItem from '../ReviewItem/ReviewItem';
import {IReviewItem} from '../../../types/types';
import {useReviewListStyle} from '@/components/Review/ReviewsList/style';

interface ReviewsList {
	reviews: IReviewItem[] | []
}

const ReviewsList: FC<ReviewsList> = ({reviews}) => {
	const {
		ReviewsWrappMUI,
		ReviewsContentMUI,
		ReviewBlockMUI
	} = useReviewListStyle();

	return (
		<ReviewsWrappMUI>
			<ReviewsContentMUI>
				<ReviewBlockMUI>
					{reviews.slice(0, 3).map(item => (
						<ReviewItem
							key={item.createdTime}

							text={item.text}
							userName={item.userName}
							createdTime={item.createdTime}
						/>
					))}
				</ReviewBlockMUI>
				<ReviewBlockMUI>
					{reviews.slice(3, 6).map(item => (
						<ReviewItem
							key={item.createdTime}

							text={item.text}
							userName={item.userName}
							createdTime={item.createdTime}
						/>
					))}
				</ReviewBlockMUI>
			</ReviewsContentMUI>
		</ReviewsWrappMUI>

	);
};

export default React.memo(ReviewsList);
