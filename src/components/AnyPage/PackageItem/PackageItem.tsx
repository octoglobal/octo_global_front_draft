import React, { FC, useMemo } from 'react';
import {IPackageModel} from '@/models/IPackageModel';
import {usePackageItemStyles} from '@/components/AnyPage/PackageItem/style';
import OrderItem, {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';
import { useUserStore } from '@/hooks/useUserStore';

interface IPackageItem {
	component: ComponentType,
	packageData: IPackageModel
	dropItems: IDropItem[],
}

const PackageItem: FC<IPackageItem> = ({packageData, component, dropItems, }) => {

	const {
		longId, orders, id, statusId
	} = packageData;

	const {
		isAdmin
	} = useUserStore();

	const isStatus = useMemo(() =>{
		switch (statusId) {
		case 0:
			return {
				text: 'Объединено пользователем',
				visible: true,
				status: 0,
				visibleText: isAdmin,
			};
		case 1:
			return {
				text: 'Объединено администратором',
				visible: true,
				status: 1,
				visibleText: true,
			};
		case 2:
			return  {
				text: 'Готовится к отправлению',
				visible: true,
				status: 2,
				visibleText: true,
			};
		case 3:
			return  {
				text: 'Отправлен',
				visible: true,
				status: 3,
				visibleText: true,
			};
		default:
			return  {
				text: '',
				visible: false,
				status: null,
			};
		}
	}, [statusId]);

	const isDropDownVisible = useMemo(() => (
		(isStatus.status === 0 || isStatus.status === 1 || (isStatus.status === 2 && isAdmin)) && isStatus.visible
	), [isStatus]);

	const modificationDropItemArray = useMemo(() => {
		let dropItemsArray = [];
		if (statusId === 2 && isAdmin) {
			dropItemsArray = [{
				title: 'Удалить адрес',
				onClick: () => console.log('123')
			}, {
				title: 'Перенести',
				onClick: () => console.log('321')
			}];
		} else {
			dropItemsArray = dropItems;
		}
		return dropItemsArray;
	}, [statusId]);

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
