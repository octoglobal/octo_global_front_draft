import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useState} from 'react';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import {fetchDeleteOrders} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';

export const useOrderItemStock = () => {

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
		{title: 'Возврат', onClick: () => console.log(1)},
		{title: 'Проверка товара', onClick: () => console.log(1)},
		{title: 'Оформить', onClick: () => console.log(1)},
	];

	const dialogStyles = {};

	return {
		isAdmin,
		isStatusModal,
		isDeleteModal,
		dropDownData,
		dialogStyles,
		setIsStatusModal,
		setIsDeleteModal,
		handleDeleteOrder,
		handleToggleModal,
		handleSuccessChangeStatus
	};
};
