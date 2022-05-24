import React, {FC, useState} from 'react';

import {IReviewItem} from '../../../types/types';
import { ToRusDate } from '@/lib/services/services';
import {useReviewItemStyle} from '@/components/Review/ReviewItem/style';
import { useUserStore } from '@/hooks/useUserStore';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchDeleteReview} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';
import OrderDeleteModal from '@/components/AnyPage/OrderItem/OrderDeleteModal/OrderDeleteModal';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

const ReviewItem: FC<IReviewItem> = ({text, createdTime, userName, id}) => {
	const [openMore, setOpenMore] = useState<boolean>(false);
	
	const triggerShowMore = () => {
		setOpenMore(prevState => !prevState);
	};
	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
	const handlerCancel = (): void => {
		setOpenConfirmDialog(false);
	};

	const {		
		isAdmin,
	} = useUserStore();	
	const dispatch = useAppDispatch();

	const handleDeleteReview = ()=>{
		
		dispatch(fetchDeleteReview({id:id}));
		setOpenConfirmDialog(false);
	};

	return (
		<>
			<ReviewItemWrapperMUI>
				<ReviewHeaderMUI>
					<ReviewNameMUI>{userName}</ReviewNameMUI>
					<ReviewDateMUI>{ToRusDate(createdTime)}</ReviewDateMUI>
					{/*<ReviewDateMUI>{time}</ReviewDateMUI>*/}
				</ReviewHeaderMUI>
				{/*<ReviewTextMUI>{ellipsis(text, 145)}</ReviewTextMUI>*/}
				{/*<ReviewTextMUI>{text}</ReviewTextMUI>*/}
				{text.length > 145 ? (
					<CollapseMUI in={openMore} collapsedSize='74px'>
						{/*<ReviewTextMUI>{openMore ? text : ellipsis(text, 145)}</ReviewTextMUI>*/}
						<ReviewTextMUI>{text}</ReviewTextMUI>
					</CollapseMUI>
				) : (
					<ReviewTextMUI>{text}</ReviewTextMUI>
				)}
				{/*<Collapse in={openMore} collapsedSize='74px'>*/}
				{/*	/!*<ReviewTextMUI>{openMore ? text : ellipsis(text, 145)}</ReviewTextMUI>*!/*/}
				{/*	<ReviewTextMUI>{text}</ReviewTextMUI>*/}
				{/*</Collapse>*/}
				{text.length >= 145 && (
					<ShowMoreMUI onClick={triggerShowMore}>{openMore ? 'Скрыть' : 'Показать полностью'}</ShowMoreMUI>
				)}
			
			</ReviewItemWrapperMUI>

			<OrderDeleteModal
				title="Вы уверены что хотите удалить отзыв?"
				buttonNoText='Нет'
				onClickYes={handleDeleteReview}
				onClickNo={handlerCancel}
				dialogProps={{
					open: openConfirmDialog,
					onClose: handlerCancel
				}}
			/>
				
			
			{isAdmin?<ButtonUI style={{
				width: '100px',
				height: '30px',
				backgroundColor: '#274D82',
				opacity: '0.8'
			}} onClick={()=>setOpenConfirmDialog(true)}>delete</ButtonUI>: null}
		</>
		
	);
};

export default React.memo(ReviewItem);

const {
	CollapseMUI,
	ReviewItemWrapperMUI,
	ReviewHeaderMUI,
	ReviewNameMUI,
	ReviewDateMUI,
	ReviewTextMUI,
	ShowMoreMUI
} = useReviewItemStyle();
