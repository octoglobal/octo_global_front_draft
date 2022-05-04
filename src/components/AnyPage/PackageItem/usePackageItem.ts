import {useUserStore} from '@/hooks/useUserStore';
import {useOrdersAccount} from '@/hooks/useOrdersAccount';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useMemo} from 'react';
import {fetchPackageRemoveAddress} from '@/reducers/orderStockSlice/asynThunk/stockApi';
import {IPackageModel} from '@/models/IPackageModel';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';

export const usePackageItem = (packageData: IPackageModel, dropItems: IDropItem[]) => {

	const {
		longId, orders, id, statusId
	} = packageData;

	const {
		isAdmin
	} = useUserStore();


	const {
		handlePushOrdersAddress
	} = useOrdersAccount();

	const {
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);
	const dispatch = useAppDispatch();


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

	const handleSendPackage = () => {
		handlePushOrdersAddress(id);
	};

	const handleDeleteAddress = () => {
		if (adminSwitchIdToUser) {
			dispatch(fetchPackageRemoveAddress({
				packageId: id,
				userId: adminSwitchIdToUser
			}));
		}
	};


	const modificationDropItemArray = useMemo(() => {
		let dropItemsArray = [];
		if (statusId === 2 && isAdmin) {
			dropItemsArray = [{
				title: 'Удалить адрес',
				onClick: handleDeleteAddress
			}, {
				title: 'Перенести',
				onClick: () => console.log('321')
			}];
		} else if (statusId === 1 && !isAdmin) {
			dropItemsArray = [{
				title: 'Оформить',
				onClick: handleSendPackage
			}];
		} else {
			dropItemsArray = dropItems;
		}
		return dropItemsArray;
	}, [statusId]);

	return {
		id,
		longId,
		orders,
		isStatus,
		isDropDownVisible,
		modificationDropItemArray
	};
};
