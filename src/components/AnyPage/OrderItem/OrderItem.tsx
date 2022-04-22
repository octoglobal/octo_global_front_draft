import React, {FC} from 'react';
import {IOrderModel} from '@/models/IOrderModel';
import {useOrderItemStyles} from '@/components/AnyPage/OrderItem/style';
import OrderItemTitle from '@/components/AnyPage/OrderItem/OrderItemTitle/OrderItemTitle';
import OrderItemBody from '@/components/AnyPage/OrderItem/OrderItemBody/OrderItemBody';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';

interface IOrderItemProps {
	orderItem: IOrderModel,
	dropItem: IDropItem[],
	visibleDropDown: boolean,
	visibleCheckbox: boolean,
}

const OrderItem: FC<IOrderItemProps> = (
	{
		orderItem: {
			title,
			longId,
			id,
			tracking_link,
			trackNumber,
			comment,
		},
		visibleCheckbox,
		visibleDropDown,
		dropItem
	}
) => {
	return (
		<ContainerMUI>
			<OrderItemTitle
				id={id}
				title={title}
				longId={longId}
				visibleCheckbox={visibleCheckbox}
				visibleDropDown={visibleDropDown}
				dropItems={dropItem}
			/>
			<OrderItemBody
				title={title}
				tracking_link={tracking_link}
				trackNumber={trackNumber}
				comment={comment}
			/>
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = useOrderItemStyles();

export default React.memo(OrderItem);
