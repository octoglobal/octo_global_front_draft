import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useUserStore} from '@/hooks/useUserStore';
import {fetchDeleteOrders} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';

export const useOrderItemWait = () => {
	const {
		isAdmin,
		user: {
			id
		}
	} = useUserStore();

	const {
		adminSwitchIdToUser,
	} = useAppSelector(state => state.adminReducer);

	const {
		orderWaitData
	} = useAppSelector(state => state.orderWaitReducer);

	const dispatch = useAppDispatch();
	const [isStatusModal, setIsStatusModal] = useState<boolean>(false);
	const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);

	const handleToggleModal = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	const handleSuccessChangeStatus = (id: number) => {
		return () => {
			handleToggleModal(setIsStatusModal)();
			dispatch(orderWaitSlice.actions.sortOrderData(id));
		};
	};

	const handleDeleteOrder = (orderId: number) => {
		return () => {
			const innerId = isAdmin ? adminSwitchIdToUser ?  adminSwitchIdToUser : id : id;
			if (innerId) {
				dispatch(fetchDeleteOrders({
					userId: innerId,
					orderId: [orderId],
					ordersData: orderWaitData,
					successCallback: handleToggleModal(setIsDeleteModal)
				}));
			}
		};
	};

	const dropDownData = [
		{title: 'Удалить', onClick: handleToggleModal(setIsDeleteModal)},
		{title: 'На склад', onClick: handleToggleModal(setIsStatusModal)},
	];

	return {
		isAdmin,
		isStatusModal,
		isDeleteModal,
		dropDownData,
		setIsStatusModal,
		setIsDeleteModal,
		handleDeleteOrder,
		handleToggleModal,
		handleSuccessChangeStatus
	};
};
