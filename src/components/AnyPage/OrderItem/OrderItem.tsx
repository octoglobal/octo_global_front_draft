import React, {FC, useMemo} from 'react';
import {IOrderModel} from '@/models/IOrderModel';
import {useOrderItemStyles} from '@/components/AnyPage/OrderItem/style';
import OrderItemTitle from '@/components/AnyPage/OrderItem/OrderItemTitle/OrderItemTitle';
import OrderItemBody from '@/components/AnyPage/OrderItem/OrderItemBody/OrderItemBody';
import {useOrderItemWait} from '@/components/AnyPage/OrderItem/useOrderItemWait';
import OrderStatusModal from '@/components/AnyPage/OrderItem/OrderStatusModal/OrderStatusModal';
import {useOrderItemStock} from '@/components/AnyPage/OrderItem/useOrderItemStock';
import ModalUI from '../../../UI/UIComponents/ModalUI/ModalUI';
import {useOrderItemSend} from '@/components/AnyPage/OrderItem/useOrderItemSend';
import OrderDeleteModal from '@/components/AnyPage/OrderItem/OrderDeleteModal/OrderDeleteModal';


export type ComponentType = 'wait' | 'stock' | 'send';

const getCustomHooksData = (component: ComponentType, orderId: number, orderItem: IOrderModel) => {
	if (component === 'wait') {
		const waitData = useOrderItemWait();
		return waitData;
	}
	if (component === 'stock') {
		const stockData = useOrderItemStock(orderId, orderItem);
		return stockData;
	}
	if (component === 'send') {
		const sendData = useOrderItemSend(orderId, orderItem);
		return sendData;
	}
};

// const dialogStyles = {
// 	'& .MuiDialog-container': {
// 		'& .MuiPaper-root': {
// 			borderRadius: '15px',
// 			minWidth: '704px',
// 			maxHeight: '353px',
// 			height: '100%',
// 			width: '100%',
// 			'& > div': {
// 				height: '100%',
// 				padding: '115px 10px',
// 				textAlign: 'center',
// 				'& > div': {
// 					'& > h4': {
// 						marginBottom: '70px',
// 					},
// 					'& > button': {
// 						width: '65px !important',
// 						padding: '0',
// 						minWidth: '65px !important',
// 					}
// 				}
// 			},
// 		}
// 	}
// };


interface IOrderItemProps {
	orderItem: IOrderModel,
	visibleDropDown: boolean,
	visibleCheckbox: boolean,
	visibleTrackNumber?: boolean,
	visibleTitle?: boolean,
	component: ComponentType,
	isBorderBottom?: boolean,
}

const OrderItem: FC<IOrderItemProps> = (
	{
		visibleCheckbox,
		visibleDropDown,
		orderItem,
		visibleTrackNumber = true,
		visibleTitle = true,
		component,
		isBorderBottom = true,
	}
) => {

	const {
		title,
		longId,
		id,
		tracking_link,
		trackNumber,
		comment,
	} = orderItem;

	const {
		isAdmin,
		dropDownData,
		isDeleteModal,
		isStatusModal,
		isReturnOrder,
		setIsDeleteModal,
		setIsStatusModal,
		setIsReturnOrder,
		handleDeleteOrder,
		handleReturnOrder,
		handleToggleModal,
		dialogCheckProps,
		dialogSuccessReturnProps,
		handleSuccessChangeStatus,
	} = getCustomHooksData(component, id, orderItem) as any;

	const isContainerStyles = useMemo(() => {
		const isBorderBottomFalseStyles = isBorderBottom ? {} : {
			borderBottom: '0px solid red !important',
			paddingBottom: '0 !important',
		};
		return {
			...isBorderBottomFalseStyles,
		};
	}, [isBorderBottom]);

	const isWait = useMemo(() => component == 'wait', [component]);


	return (
		<>
			<ContainerMUI sx={isContainerStyles}>
				{visibleTitle && (
					<OrderItemTitle
						id={id}
						title={title}
						longId={longId}
						visibleCheckbox={visibleCheckbox}
						visibleDropDown={visibleDropDown}
						dropItems={dropDownData}
					/>
				)}
				<OrderItemBody
					title={title}
					visibleTrackNumber={visibleTrackNumber}
					tracking_link={tracking_link}
					trackNumber={trackNumber}
					comment={comment}
				/>
			</ContainerMUI>
			{(component == 'wait' || component == 'stock') && (
				<>
					{isAdmin && (
						<OrderDeleteModal
							dialogProps={{
								open: isDeleteModal,
								onClose: handleToggleModal(setIsDeleteModal)
							}}
							title='Вы точно хотите удалить заказ?'
							buttonNoText='Нет'
							onClickYes={handleDeleteOrder(id)}
							onClickNo={handleToggleModal(setIsDeleteModal)}
						/>
					)}
					{isAdmin && (
						<OrderStatusModal
							title={isWait ?
								'Чтобы продолжить перенесите из ожидаемых на склад '
								: 'Чтобы продолжить перенесите из склада в ожидаемые'
							}
							successCallback={handleSuccessChangeStatus(id)}
							orderItem={orderItem}
							open={isStatusModal}
							onClose={() => setIsStatusModal(false)}
							component={component}
							visibleDropDown={false}
							buttonText={'Отлично'}
							submitStatus={isWait ? 1 : 0}
						/>
					)}
				</>
			)}
			{component == 'stock' && (
				<>
					<OrderDeleteModal
						dialogProps={{
							open: isReturnOrder,
							onClose: handleToggleModal(setIsDeleteModal)
						}}
						title='Вы точно хотите вернуть заказ?'
						onClickYes={handleReturnOrder(id)}
						onClickNo={handleToggleModal(setIsReturnOrder)}
					/>
					<ModalUI
						{...dialogSuccessReturnProps}
					/>
					<ModalUI
						{...dialogCheckProps}
					/>
				</>
			)}
		</>
	);
};

const {
	ContainerMUI
} = useOrderItemStyles();

export default React.memo(OrderItem);
