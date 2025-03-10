import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useMemo, useState} from 'react';
import {
	fetchMergeOrders,
	fetchOrderCheck,
	fetchOrderDelete,
	fetchOrderReturn
} from '@/reducers/orderStockSlice/asynThunk/stockApi';
import {IOrderModel} from '@/models/IOrderModel';
import {orderStockSlice} from '@/reducers/orderStockSlice/orderStockSlice';
import {useOrdersAccount} from '@/hooks/useOrdersAccount';

export const useOrderItemStock = (orderId: number, orderItem: IOrderModel) => {

	const {
		isAdmin,
		user: {
			id,
		},
	} = useUserStore();

	const {
		adminSwitchIdToUser,
	} = useAppSelector(state => state.adminReducer);

	const dispatch = useAppDispatch();
	const {
		handlePushOrdersAddress
	} = useOrdersAccount();
	const [isStatusModal, setIsStatusModal] = useState<boolean>(false);
	const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
	const [isReturnOrder, setIsReturnOrder] = useState<boolean>(false);
	const [isReturnSuccess, setIsReturnSuccess] = useState<{ state: boolean, text: string }>({
		state: false,
		text: 'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией'
	});
	const [isCheckOrder, setIsCheckOrder] = useState<{ state: boolean, text: string }>({
		state: false,
		text: 'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией'
	});
	const innerId = isAdmin ? adminSwitchIdToUser ? adminSwitchIdToUser : id : id;


	const handleToggleModal = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	const handleSuccessChangeStatus = (id: number) => {
		return () => {
			handleToggleModal(setIsStatusModal)();
			dispatch(orderStockSlice.actions.filterStockData(id));
		};
	};


	const handleDeleteOrder = (orderId: number) => {
		return () => {
			if (innerId || orderId) {
				dispatch(fetchOrderDelete({order: orderItem}))
					.then(() => setIsDeleteModal(false));
			}
		};
	};

	const handleReturnOrder = (orderId: number) => {
		return () => {
			if (innerId) {
				dispatch(fetchOrderReturn({
					orderId,
				})).then(response => {
					const text = response?.payload == 'error' ?
						'Что-то пошло не так, попробуйте позже' :
						'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией';
					setIsReturnOrder(false);
					setIsReturnSuccess({
						state: true,
						text
					});
				})
					.catch(() => {
						setIsReturnSuccess({
							state: true,
							text: 'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией',
						});
					});
			}
		};
	};

	const handleCheckOrder = () => {
		if (orderId) {
			dispatch(fetchOrderCheck({
				orderId,
			})).then(response => {
				const text = response?.payload == 'error' ?
					'Что-то пошло не так, попробуйте позже' :
					'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией';
				setIsCheckOrder({
					state: true,
					text
				});
			});
		}
	};

	const handleSendOrder = () => {
		const url = isAdmin ? '/admin/packages' : '/user/package';
		dispatch(
			fetchMergeOrders({
				url: url,
				userId: adminSwitchIdToUser ? adminSwitchIdToUser : id,
				orders: [orderId]
			})
		).then((response) => {
			try {
				const payload = response.payload as { packageData: { id: number } };
				const packageId = payload.packageData.id;
				if (packageId !== undefined) {
					handlePushOrdersAddress(packageId);
				}
			} catch (e) {
				throw new Error('Error send order');
			}
		});
	};

	const dropDownData = useMemo(() => {
		if (!isAdmin) {
			return [
				{title: 'Возврат', onClick: handleToggleModal(setIsReturnOrder)},
				{title: 'Проверка товара', onClick: handleCheckOrder},
				{title: 'Оформить', onClick: handleSendOrder},
			];
		}
		return [
			{title: 'Удалить', onClick: handleToggleModal(setIsDeleteModal)},
			{title: 'В ожидаемое', onClick: handleToggleModal(setIsStatusModal)},
			{title: 'Оформить', onClick: handleSendOrder},
		];
	}, [isAdmin]);

	const dialogSuccessReturnProps = {
		dialogProps: {
			open: isReturnSuccess.state,
			onClose: () => setIsReturnSuccess(prevState => ({state: !prevState.state, text: prevState.text})),
		},
		containerStyles: {
			// marginTop: '45px',
		},
		title: isReturnSuccess.text,
	};

	const dialogCheckProps = {
		dialogProps: {
			open: isCheckOrder.state,
			onClose: () => setIsCheckOrder(prevState => ({
				state: !prevState.state,
				text: prevState.text
			}))
		},
		containerStyles: dialogSuccessReturnProps.containerStyles,
		title: isCheckOrder.text
	};


	return {
		isAdmin,
		isCheckOrder,
		dropDownData,
		isReturnOrder,
		isStatusModal,
		isDeleteModal,
		setIsStatusModal,
		setIsCheckOrder,
		setIsReturnOrder,
		setIsDeleteModal,
		handleReturnOrder,
		handleCheckOrder,
		handleToggleModal,
		handleDeleteOrder,
		dialogCheckProps,
		handleSuccessChangeStatus,
		dialogSuccessReturnProps,
	};
};
