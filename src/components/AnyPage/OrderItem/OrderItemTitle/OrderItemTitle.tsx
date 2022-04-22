import React, {FC} from 'react';
import {IOrderModel} from '@/models/IOrderModel';
import {useOrderTitleStyles} from '@/components/AnyPage/OrderItem/OrderItemTitle/style';
import {useFormContext} from 'react-hook-form';
import CheckboxUIV2 from '../../../../UI/UIComponents/CheckboxUIV2/CheckboxUIV2';
import DropDownUI from '../../../../UI/UIComponents/DropDownUI/DropDownUI';
import {IDropItem} from '../../../../UI/UIComponents/DropDownUI/type';

interface IOrderItemTitleProps {
	visibleCheckbox: boolean;
	visibleDropDown: boolean;
	dropItems: IDropItem[]
}

type OrderItemTitleProps =
	Pick<IOrderModel, 'longId' | 'title' | 'id'>
	& IOrderItemTitleProps

const OrderItemTitle: FC<OrderItemTitleProps> = (
	{
		longId,
		title,
		visibleCheckbox= true,
		dropItems,
		visibleDropDown
	}
) => {

	const {
		control,
	} = useFormContext();

	return (
		<ContainerMUI>
			<LeftContentMUI>
				{visibleCheckbox && (
					<CheckboxUIV2
						controller={{
							name: `${title}${longId}`,
							control
						}}/>
				)}
				<TitleMUI>
					Заказ № {longId}
				</TitleMUI>
			</LeftContentMUI>
			{visibleDropDown && (
				<DropDownUI
					dropItems={dropItems}
				/>
			)}
		</ContainerMUI>
	);
};

const {
	TitleMUI,
	ContainerMUI,
	LeftContentMUI,
} = useOrderTitleStyles();

export default React.memo(OrderItemTitle);
