import {useUserStore} from '@/hooks/useUserStore';
import {useOrdersAccount} from '@/hooks/useOrdersAccount';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useMemo, useState} from 'react';
import {fetchDeletePackage, fetchPackageRemoveAddress} from '@/reducers/orderStockSlice/asynThunk/stockApi';
import {IPackageModel} from '@/models/IPackageModel';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';
import {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';
import {fetchDeletePackageInSend, fetchDeleteTrackNumber} from '@/reducers/orderSendSlice/asyncThunk/orderSendApi';

export const usePackageItem = (
	packageData: IPackageModel,
	dropItems: IDropItem[],
	component: ComponentType
) => {

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
	const [isChangeStatus, setIsChangeStatus] = useState<boolean>(false);
	const [isDeletePackageModal, setIsDeletePackageModal] = useState<boolean>(false);
	const [isDeleteTrackNumberModal, setIsDeleteTrackNumberModal] = useState<boolean>(false);

	const isVisibleAddress = useMemo(() => (
		!!(packageData?.address)
	), [packageData]);

	const orderContainerStyles = useMemo(() => (
		isVisibleAddress ? {
			'& > *:last-child': {
				marginBottom: 0,
			}
		} : {}
	), [isVisibleAddress]);


	const orderItem = useMemo(() => {
		return {
			id: packageData.id,
			trackNumber: '',
			statusId: packageData.statusId,
			createdTime: '',
			longId: packageData.longId,
			title: '',
			tracking_link: '',
			userId: adminSwitchIdToUser as number,
			comment: '',
		};
	}, [packageData]);

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
		case 4:
			return  {
				text: 'Отклонено администратором',
				visible: true,
				status: 4,
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
		(
			isStatus.status === 0
			|| isStatus.status === 1
			|| (isStatus.status === 2 && isAdmin)
			|| isStatus.status === 4 && isAdmin
			|| component == 'send' && isAdmin
		)
		&& isStatus.visible
	), [isStatus]);


	const handleSendPackage = () => {
		handlePushOrdersAddress(id);
	};

	const handleDeleteAddress = () => {
		if (adminSwitchIdToUser && id) {
			dispatch(fetchPackageRemoveAddress({
				packageId: id,
				userId: adminSwitchIdToUser
			}));
		}
	};

	const handleAddTrackNumber = () => {
		setIsChangeStatus(prevState => !prevState);
	};

	const handleToggleDeleteModal = () => {
		setIsDeletePackageModal(prevState => !prevState);
	};

	const handleToggleDeleteTrackNumberModal = () => {
		setIsDeleteTrackNumberModal(prevState => !prevState);
	};


	const handleDeletePackage = () => {
		if (id && adminSwitchIdToUser) {
			const fetchDelete = component == 'stock'
				? fetchDeletePackage
				: fetchDeletePackageInSend;
			dispatch(fetchDelete({
				packageId: id,
				userId: adminSwitchIdToUser
			})).then(() => {
				handleToggleDeleteModal();
			});
		}
	};

	const handleDeleteTrackNumber = () => {
		if (id && adminSwitchIdToUser) {
			dispatch(fetchDeleteTrackNumber({
				userId: adminSwitchIdToUser,
				packageId: id,
			})).then(() => {
				handleToggleDeleteTrackNumberModal();
			});
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
				onClick: handleAddTrackNumber,
			}];
		} else if (statusId === 1 && !isAdmin) {
			dropItemsArray = [{
				title: 'Оформить',
				onClick: handleSendPackage
			}];
		} else if (statusId === 4 && isAdmin) {
			dropItemsArray = [
				...dropItems,
				{
					title: 'Перенести',
					onClick: handleAddTrackNumber
				}
			];
		} else if (statusId === 3 && component == 'send')  {
			dropItemsArray = [
				{
					title: 'Удалить трек номер',
					onClick: handleToggleDeleteTrackNumberModal,
				}
			];
		} else {
			dropItemsArray = dropItems;
		}

		if (isAdmin) {
			return [
				...dropItemsArray,
				{
					title: 'Удалить',
					onClick: handleToggleDeleteModal
				}
			];
		}
		return dropItemsArray;
	}, [statusId]);


	return {
		id,
		longId,
		orders,
		isStatus,
		orderItem,
		isChangeStatus,
		isVisibleAddress,
		setIsChangeStatus,
		isDropDownVisible,
		isDeletePackageModal,
		handleDeletePackage,
		handleAddTrackNumber,
		handleToggleDeleteModal,
		isDeleteTrackNumberModal,
		handleDeleteTrackNumber,
		handleToggleDeleteTrackNumberModal,
		orderContainerStyles,
		modificationDropItemArray
	};
};
