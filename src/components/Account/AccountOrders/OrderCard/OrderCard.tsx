import React, {FC} from 'react';
import Image from 'next/image';

import TestOrderImage from '../../../../UI/UIIcon/TestOrderImage.png';
import {IOrderCard} from '../../../../types/types';

import {useOrderCardStyle} from './style';

interface IOrderCardProps {
	order: IOrderCard
}

const OrderCard: FC<IOrderCardProps> = ({order}) => {

	const {
		OrderCardUI,
		OrderContentUI,
		OrderTitlesUI,
		OrderTitleUI,
		OrderBoldTitleUI,
		OrderInfoUI,
		OrderInfoBlockUI,
		ImageUI,
		InfoUI
	} = useOrderCardStyle();

	const {
		orderNumber,
		trackNumber,
		shop,
		storage,
		daysLeft,
		highlight,
		disabled,
	} = order;

	return (
		<OrderCardUI
			highlight={highlight}
			disabled={disabled}
		>
			<OrderContentUI>
				<OrderTitlesUI>
					<OrderBoldTitleUI>Заказ № {orderNumber} прибыл на склад</OrderBoldTitleUI>
					<OrderTitleUI>Трек номер: <OrderBoldTitleUI>{trackNumber}</OrderBoldTitleUI></OrderTitleUI>
				</OrderTitlesUI>
				<OrderInfoUI>
					<OrderInfoBlockUI>
						<ImageUI>
							<Image
								src={TestOrderImage}
							/>
						</ImageUI>
						<InfoUI>
							<OrderTitleUI>Магазин: <OrderBoldTitleUI>{shop}</OrderBoldTitleUI></OrderTitleUI>
							<OrderTitleUI>Хранение: <OrderBoldTitleUI>{storage === 'free' ? 'бесплатное' : 'платное'}, осталось {daysLeft} дней</OrderBoldTitleUI></OrderTitleUI>
							<OrderTitleUI>Трек номер: <OrderBoldTitleUI>7457895665656565656445</OrderBoldTitleUI></OrderTitleUI>
						</InfoUI>
					</OrderInfoBlockUI>
				</OrderInfoUI>
			</OrderContentUI>
		</OrderCardUI>
	);
};

export default React.memo(OrderCard);
