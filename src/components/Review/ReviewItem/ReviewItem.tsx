import React, {FC} from 'react';
import {useReviewItemStyle} from '@/components/Review/ReviewItem/style';

import {IReview} from '../../../types/types';

const ReviewItem: FC<IReview> = ({
	name,
	time,
	comment
}) => {

	const {
		ReviewItemWrapperMUI,
		ReviewHeaderMUI,
		ReviewNameMUI,
		ReviewDateMUI,
		ReviewTextMUI
	} = useReviewItemStyle();

	return (
		<ReviewItemWrapperMUI>
			<ReviewHeaderMUI>
				<ReviewNameMUI>{name}</ReviewNameMUI>
				<ReviewDateMUI>{time}</ReviewDateMUI>
			</ReviewHeaderMUI>
			<ReviewTextMUI>{comment}</ReviewTextMUI>
		</ReviewItemWrapperMUI>
	);
};

export default React.memo(ReviewItem);
