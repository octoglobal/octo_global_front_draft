import React, {FC} from 'react';
import {useReviewItemStyle} from '@/components/Review/ReviewItem/style';

import {IReviewItem} from '../../../types/types';
import { ToRusDate } from '@/lib/services/services';

const ReviewItem: FC<IReviewItem> = ({text, createdTime, userName}) => {

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
				<ReviewNameMUI>{userName}</ReviewNameMUI>
				<ReviewDateMUI>{ToRusDate(createdTime)}</ReviewDateMUI>
				{/*<ReviewDateMUI>{time}</ReviewDateMUI>*/}
			</ReviewHeaderMUI>
			<ReviewTextMUI>{text}</ReviewTextMUI>
		</ReviewItemWrapperMUI>
	);
};

export default React.memo(ReviewItem);
