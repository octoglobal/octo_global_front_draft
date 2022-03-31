import React, {FC} from 'react';
import Image from 'next/image';

import {useMobile} from '@/hooks/useMedia';
// import TestOrderImage from '../../../../UI/UIIcon/TestOrderImage.png';
import TestOrderImage from '../../../../UI/UIIcon/Package.png';
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
		InfoUI,
		TitleUI,
		BoldTitleUI
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

	const {isMobile} = useMobile();

	return (
		<OrderCardUI
			highlight={highlight}
			disabled={disabled}
		>
			<OrderContentUI>
				<OrderTitlesUI>
					<BoldTitleUI>Заказ № {orderNumber} прибыл на склад</BoldTitleUI>
					{!isMobile && <TitleUI>Трек номер: <BoldTitleUI>{trackNumber}</BoldTitleUI></TitleUI>}
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
