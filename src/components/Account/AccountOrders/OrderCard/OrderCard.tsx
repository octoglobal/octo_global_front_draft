import React, {FC} from 'react';

import {useMobile} from '@/hooks/useMedia';
import Arrow_Blue from '../../../../UI/UIIcon/Arrow_Blue.svg';

import Package from '../../../../UI/UIIcon/Package.svg';
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
		OrderLinkMUI,
		OrderBoldTitleUI,
		OrderInfoUI,
		OrderInfoBlockUI,
		ImageUI,
		InfoUI,
		BoldTitleUI
	} = useOrderCardStyle();

	const {
		longId,
		trackNumber,
		highlight,
		disabled,
		tracking_link
	} = order;

	const {isMobile} = useMobile();

	return (
		<OrderCardUI
			highlight={highlight}
			disabled={disabled}
		>
			<OrderContentUI>
				<OrderTitlesUI>
					<BoldTitleUI>Заказ № {longId} прибыл на склад</BoldTitleUI>
					{!isMobile && <BoldTitleUI>{trackNumber}</BoldTitleUI>}
				</OrderTitlesUI>
				<OrderInfoUI>
					<OrderInfoBlockUI>
						<ImageUI>
							{/*<Image*/}
							{/*	src={isMobile ? PackageSmall : Package}*/}
							{/*/>*/}
							<Package />
						</ImageUI>
						<InfoUI>
							<OrderBoldTitleUI>Ebay</OrderBoldTitleUI>
							{/*<OrderTitleUI>Хранение: <OrderBoldTitleUI>{storage === 'free' ? 'бесплатное' : 'платное'}, осталось {daysLeft} дней</OrderBoldTitleUI></OrderTitleUI>*/}
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
