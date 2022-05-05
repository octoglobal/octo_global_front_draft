import React, { FC } from 'react';
import {IPackageModel} from '@/models/IPackageModel';
import {usePackageItemStyles} from '@/components/AnyPage/PackageItem/style';
import OrderItem, {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';
import {usePackageItem} from '@/components/AnyPage/PackageItem/usePackageItem';

interface IPackageItem {
	component: ComponentType,
	packageData: IPackageModel
	dropItems: IDropItem[],
}

const PackageItem: FC<IPackageItem> = ({packageData, component, dropItems, }) => {

	const {
		id,
		orders,
		longId,
		isStatus,
		isDropDownVisible,
		modificationDropItemArray,
	} = usePackageItem(packageData, dropItems);

	return (
		<ContainerMUI>
			<TitleMUI>
				<TitleTextMUI>
					<TextMUI>
						Посылка № {longId}
					</TextMUI>
					{isStatus.visible && isStatus.visibleText && (
						<StatusTextMUI>
							{isStatus.text}
						</StatusTextMUI>
					)}
				</TitleTextMUI>
				{isDropDownVisible && (
					<DropDownUI
						itemId={id}
						dropItems={modificationDropItemArray}
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
					isBorderBottom={false}
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
