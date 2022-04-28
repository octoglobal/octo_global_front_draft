import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useUserStore} from '@/hooks/useUserStore';
import {fetchDeleteOrders} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';

export const useOrderItemWait = () => {
	const {
		isAdmin,
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

	const handleDeleteOrder = (orderId: number) => {
		return () => {
			if (adminSwitchIdToUser) {
				dispatch(fetchDeleteOrders({
					userId: adminSwitchIdToUser,
					orderId: [orderId],
					ordersData: orderWaitData,
					successCallback: handleToggleModal(setIsDeleteModal)

				}));
			}
			// try {
			// 	const sendData = {
			// 		'userId': adminSwitchIdToUser,
			// 		'orderId': [orderId]
			// 	};
			// 	octoAxios.delete<IDefaultFetchSuccess>('/admin/orders', {
			// 		data: sendData
			// 	}).then(response => {
			// 		if (response.data.message === 'success') {
			// 			dispatch(orderWaitSlice.actions.sortOrderData(orderId));
			// 		}
			// 	});
			// } catch (e) {
			// 	throw new Error('Error delete order');
			// }
		};
	};

	const dropDownData = [
		{title: 'Удалить', onClick: handleToggleModal(setIsDeleteModal)},
		{title: 'Перенести', onClick: handleToggleModal(setIsStatusModal)},
	];


	const dialogStyles = {
		'& .MuiDialog-container': {
			'& .MuiPaper-root': {
				minWidth: '704px',
				maxHeight: '353px',
				height: '100%',
				width: '100%',
				'& > div': {
					height: '100%',
					padding: '115px 10px',
					textAlign: 'center',
					'& > div': {
						'& > h4': {
							marginBottom: '70px',
						},
						'& > button': {
							width: '65px !important',
							padding: '0',
							minWidth: '65px !important',
						}
					}
				},
			}
		}
	};

	return {
		isAdmin,
		isStatusModal,
		isDeleteModal,
		dropDownData,
		dialogStyles,
		setIsStatusModal,
		setIsDeleteModal,
		handleDeleteOrder,
		handleToggleModal
	};
};
