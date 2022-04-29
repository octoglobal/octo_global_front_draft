import React, {FC} from 'react';
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
		longId, orders, id
	} = packageData;

	return (
		<ContainerMUI>
			<TitleMUI>
				<TextMUI>
					Посылка № {longId}
				</TextMUI>
				<DropDownUI
					itemId={id}
					dropItems={dropItems}
				/>
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
	ContainerMUI,
} = usePackageItemStyles();


export default React.memo(PackageItem);
