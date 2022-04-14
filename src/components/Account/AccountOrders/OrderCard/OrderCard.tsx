import React, {FC, useCallback} from 'react';

// import {useMobile} from '@/hooks/useMedia';
import Arrow_Blue from '../../../../UI/UIIcon/Arrow_Blue.svg';
import Basket from '../../../../UI/UIIcon/Basket.svg';

import Package from '../../../../UI/UIIcon/Package.svg';
import {IDeleteOrder, IOrderCard} from '../../../../types/types';

import {useOrderCardStyle} from './style';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchDeleteOrders} from '@/reducers/ordersSlice/asyncActions/orderApi';
import {useOrdersStore} from '@/hooks/useOrdersStore';

interface IOrderCardProps {
	order: IOrderCard
}

const OrderCard: FC<IOrderCardProps> = ({order}) => {

	const dispatch = useAppDispatch();
	const {getOrders} = useOrdersStore();

	const {
		id,
		title,
		comment,
		longId,
		trackNumber,
		highlight,
		disabled,
		tracking_link
	} = order;

	// const {isMobile} = useMobile();

	const handlerDeleteTrack = useCallback((id: number): () => void => {
		return (): void => {
			//	TODO: удалить посылку
			console.log('handlerDeleteTrack: ', id);
			const data: IDeleteOrder = {
				orderId: id,
			};
			dispatch(fetchDeleteOrders(data))
				.then(response => {
					console.log('response: ', response);
					const message = response?.payload.message;
					if (message === 'success') {
						getOrders();
					}
				});
		};
	}, [id]);

	return (
		<OrderCardUI
			highlight={highlight}
			disabled={disabled}
		>
			<OrderContentUI>
				<OrderTitlesUI>
					<BoldTitleUI>Заказ № {longId} прибыл на склад</BoldTitleUI>
					{/*{!isMobile && <BoldTitleUI>{trackNumber}</BoldTitleUI>}*/}
					<BasketMUI>
						<Basket
							onClick={handlerDeleteTrack(id)}
						/>
					</BasketMUI>

				</OrderTitlesUI>
				<OrderInfoUI>
					<OrderInfoBlockUI>
						<ImageUI>
							<Package/>
						</ImageUI>
						<InfoUI>
							<OrderBoldTitleUI>{title}</OrderBoldTitleUI>
							<OrderInfoBlockUI>
								<OrderTrackNumberMUI>
									{trackNumber}
								</OrderTrackNumberMUI>
								<OrderLinkMUI href={tracking_link} target="_blank"
								              rel="noopener noreferrer">Отследить <Arrow_Blue/></OrderLinkMUI>
							</OrderInfoBlockUI>
							<TitleUI>{comment}</TitleUI>
						</InfoUI>
					</OrderInfoBlockUI>
				</OrderInfoUI>
			</OrderContentUI>
		</OrderCardUI>
	);
};

export default React.memo(OrderCard);

const {
	OrderCardUI,
	OrderContentUI,
	OrderTitlesUI,
	OrderLinkMUI,
	OrderBoldTitleUI,
	OrderTrackNumberMUI,
	OrderInfoUI,
	OrderInfoBlockUI,
	ImageUI,
	InfoUI,
	BoldTitleUI,
	BasketMUI,
	TitleUI
} = useOrderCardStyle();
