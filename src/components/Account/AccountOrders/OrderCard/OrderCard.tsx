import React, {FC, useCallback} from 'react';

import {useMobile} from '@/hooks/useMedia';
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
		OrderCardUI,
		OrderContentUI,
		OrderTitlesUI,
		OrderLinkMUI,
		OrderBoldTitleUI,
		OrderInfoUI,
		OrderInfoBlockUI,
		ImageUI,
		InfoUI,
		BoldTitleUI,
		BasketMUI
	} = useOrderCardStyle();

	const {
		id,
		longId,
		trackNumber,
		highlight,
		disabled,
		tracking_link
	} = order;

	const {isMobile} = useMobile();

	const handlerDeleteTrack = useCallback((id: number) : () => void => {
		return () : void => {
			//	TODO: удалить посылку
			console.log('handlerDeleteTrack: ', id);
			const data : IDeleteOrder = {
				orderId: id,
			};
			dispatch(fetchDeleteOrders(data))
				.then(response => {
					console.log('response: ', response);
					const message = response?.payload.message;
					if(message === 'success') {
						getOrders();
					}
					// console.log('status: ', status);
					// console.log(typeof status);
					// switch (status) {
					// 	case 200:
					// 		getOrders();
					// }
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
					{!isMobile && <BoldTitleUI>{trackNumber}</BoldTitleUI>}
					<BasketMUI>
						<Basket
							onClick={handlerDeleteTrack(id)}
						/>
					</BasketMUI>

				</OrderTitlesUI>
				<OrderInfoUI>
					<OrderInfoBlockUI>
						<ImageUI>
							<Package />
						</ImageUI>
						<InfoUI>
							<OrderBoldTitleUI>Ebay</OrderBoldTitleUI>
							<OrderInfoBlockUI>
								<OrderBoldTitleUI>{trackNumber}</OrderBoldTitleUI>
								<OrderLinkMUI href={tracking_link} target="_blank" rel="noopener noreferrer">Отследить <Arrow_Blue /></OrderLinkMUI>
							</OrderInfoBlockUI>
						</InfoUI>
					</OrderInfoBlockUI>
				</OrderInfoUI>
			</OrderContentUI>
		</OrderCardUI>
	);
};

export default React.memo(OrderCard);
