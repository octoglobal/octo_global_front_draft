import React, {FC, /*useState*/} from 'react';

import {IReviewItem} from '../../../types/types';
import { ToRusDate, ellipsis } from '@/lib/services/services';
import {useReviewItemStyle} from '@/components/Review/ReviewItem/style';
// import { Collapse } from '@mui/material';

const ReviewItem: FC<IReviewItem> = ({text, createdTime, userName}) => {
	// const [openMore, setOpenMore] = useState<boolean>(false);

	// const triggerShowMore = () => {
	// 	setOpenMore(prevState => !prevState);
	// };

	return (
		<ReviewItemWrapperMUI>
			<ReviewHeaderMUI>
				<ReviewNameMUI>{userName}</ReviewNameMUI>
				<ReviewDateMUI>{ToRusDate(createdTime)}</ReviewDateMUI>
				{/*<ReviewDateMUI>{time}</ReviewDateMUI>*/}
			</ReviewHeaderMUI>
			<ReviewTextMUI>{ellipsis(text, 190)}</ReviewTextMUI>
			{/*<Collapse in={openMore}>*/}
			{/*	<ReviewTextMUI>{openMore ? text : ellipsis(text, 190)}</ReviewTextMUI>*/}
			{/*</Collapse>*/}
			{/*{text.length >= 190 && (*/}
			{/*	<ShowMoreMUI onClick={triggerShowMore}>{openMore ? 'Скрыть' : 'Показать полностью'}</ShowMoreMUI>*/}
			{/*)}*/}
		</ReviewItemWrapperMUI>
	);
};

export default React.memo(ReviewItem);

const {
	ReviewItemWrapperMUI,
	ReviewHeaderMUI,
	ReviewNameMUI,
	ReviewDateMUI,
	ReviewTextMUI,
	ShowMoreMUI
} = useReviewItemStyle();
