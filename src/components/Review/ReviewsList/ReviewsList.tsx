import React, {FC} from 'react';

import ReviewItem from '../ReviewItem/ReviewItem';
import {useReviewListStyle} from '@/components/Review/ReviewsList/style';
import {useReviewsStore} from '@/hooks/useReviewsStore';

// interface ReviewsList {
// 	reviews: IReviewItem[] | []
// }

const ReviewsList: FC = () => {
	const {
		ReviewsWrappMUI,
		ReviewsContentMUI,
		ReviewBlockMUI
	} = useReviewListStyle();

	const {
		reviews
	} = useReviewsStore();

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
