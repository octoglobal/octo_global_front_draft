import React, { FC, useMemo } from 'react';
import {IPackageModel} from '@/models/IPackageModel';
import {usePackageItemStyles} from '@/components/AnyPage/PackageItem/style';
import OrderItem, {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';

interface IPackageItem {
	component: ComponentType,
	packageData: IPackageModel
	dropItems: IDropItem[],
}

const PackageItem: FC<IPackageItem> = ({packageData, component, dropItems, }) => {

	const {
		longId, orders, id, statusId
	} = packageData;

	const isStatus = useMemo(() => (
		statusId === 2
	), [statusId]);

	return (
		<ContainerMUI>
			<TitleMUI>
				<TitleTextMUI>
					<TextMUI>
						Посылка № {longId}
					</TextMUI>
					{isStatus && (
						<StatusTextMUI>
							Готовится к отправлению
						</StatusTextMUI>
					)}
				</TitleTextMUI>
				{!isStatus && (
					<DropDownUI
						itemId={id}
						dropItems={dropItems}
					/>
				)}
			</TitleMUI>
			{orders.map(order => (
				<OrderItem
					key={`${order.id}${order.longId}`}
					orderItem={order}
					visibleDropDown={false}
					visibleCheckbox={false}
					visibleTrackNumber={false}
					visibleTitle={false}
					component={component}
				/>
			))}
		</ContainerMUI>
	);
};

const {
	TextMUI,
	TitleMUI,
	TitleTextMUI,
	ContainerMUI,
	StatusTextMUI,
} = usePackageItemStyles();


export default React.memo(PackageItem);
