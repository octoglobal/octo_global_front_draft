import React, {FC} from 'react';
import StackGrid from 'react-stack-grid';

import ReviewItem from '../ReviewItem/ReviewItem';
import {useReviewListStyle} from '@/components/Review/ReviewsList/style';
import {useReviewsStore} from '@/hooks/useReviewsStore';
import {useMobile} from '@/hooks/useMedia';
// import { ImageList, ImageListItem  } from '@mui/material';

// interface ReviewsList {
// 	reviews: IReviewItem[] | []
// }

const ReviewsList: FC = () => {
	const {
		reviews
	} = useReviewsStore();

	const {
		isMobile
	} = useMobile();

	return (
		<ReviewsWrappMUI>
			<ReviewsContentMUI>
				<StackGrid
					columnWidth={isMobile ? '100%' : 546}
					gutterWidth={isMobile ? 0 : 56}
					gutterHeight={isMobile ? 15 : 25}
					appearDelay={0}
					duration={0}
				>
					{reviews.map(item => (
						<ReviewItem
							key={item.createdTime}

							text={item.text}
							userName={item.userName}
							createdTime={item.createdTime}
						/>
					))}
				</StackGrid>
			</ReviewsContentMUI>
		</ReviewsWrappMUI>
	);
};

export default React.memo(ReviewsList);

const {
	ReviewsWrappMUI,
	ReviewsContentMUI,
	// ReviewBlockMUI
} = useReviewListStyle();
