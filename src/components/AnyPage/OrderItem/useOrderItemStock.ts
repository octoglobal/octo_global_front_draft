import { useUserStore } from '@/hooks/useUserStore';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { useState } from 'react';
import { fetchOrderCheck, fetchOrderReturn } from '@/reducers/orderStockSlice/asynThunk/stockApi';

export const useOrderItemStock = (orderId: number) => {

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
	const [isReturnOrder, setIsReturnOrder] = useState<boolean>(false);
	const [isReturnSuccess, setIsReturnSuccess] = useState<{state: boolean, text: string}>({
		state: false,
		text: 'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией'
	});
	const [isCheckOrder, setIsCheckOrder] = useState<{state: boolean, text: string}>({
		state: false,
		text: 'Спасибо за обращение \n' + 'Вам на почту придет письмо с подробной информацией'
	});
	const innerId = isAdmin ? adminSwitchIdToUser ? adminSwitchIdToUser : id : id;


	const handleToggleModal = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	// const handleSuccessChangeStatus = (id: number) => {
	// 	return () => {
	// 		handleToggleModal(setIsStatusModal)();
	// 		dispatch(orderWaitSlice.actions.sortOrderData(id));
	// 	};
	// };
	//

	// const handleDeleteOrder = (orderId: number) => {
	// 	return () => {
	// 		if (innerId) {
	// 			dispatch(fetchDeleteOrders({
	// 				userId: innerId,
	// 				orderId: [orderId],
	// 				ordersData: orderWaitData,
	// 				successCallback: handleToggleModal(setIsDeleteModal)
	// 			}));
	// 		}
	// 	};
	// };

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

	const dropDownData = [
		{ title: 'Возврат', onClick: handleToggleModal(setIsReturnOrder) },
		{ title: 'Проверка товара', onClick: handleCheckOrder },
		{ title: 'Оформить', onClick: () => console.log(1) },
	];

	const dialogSuccessReturnProps = {
		dialogProps: {
			open: isReturnSuccess.state,
			onClose: () => setIsReturnSuccess(prevState => ({state: !prevState.state, text: prevState.text})),
		},
		containerStyles: {
			marginTop: '45px',
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
		setIsCheckOrder,
		setIsReturnOrder,
		handleReturnOrder,
		handleCheckOrder,
		handleToggleModal,
		dialogCheckProps,
		dialogSuccessReturnProps,
	};
};
