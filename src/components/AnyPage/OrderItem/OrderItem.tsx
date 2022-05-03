import React, {FC} from 'react';
import {IOrderModel} from '@/models/IOrderModel';
import {useOrderItemStyles} from '@/components/AnyPage/OrderItem/style';
import OrderItemTitle from '@/components/AnyPage/OrderItem/OrderItemTitle/OrderItemTitle';
import OrderItemBody from '@/components/AnyPage/OrderItem/OrderItemBody/OrderItemBody';
import ModalConfirmUI from '../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';
import {useOrderItemWait} from '@/components/AnyPage/OrderItem/useOrderItemWait';
import OrderStatusModal from '@/components/AnyPage/OrderItem/OrderStatusModal/OrderStatusModal';
import {useOrderItemStock} from '@/components/AnyPage/OrderItem/useOrderItemStock';
import ModalUI from '../../../UI/UIComponents/ModalUI/ModalUI';


export type ComponentType = 'wait' | 'stock' | 'send';

const getCustomHooksData = (component: ComponentType, orderId: number) => {
	if (component === 'wait') {
		const waitData = useOrderItemWait();
		return waitData;
	}
	if (component === 'stock') {
		const stockData = useOrderItemStock(orderId);
		return stockData;
	}
};


interface IOrderItemProps {
	orderItem: IOrderModel,
	visibleDropDown: boolean,
	visibleCheckbox: boolean,
	visibleTrackNumber?: boolean,
	visibleTitle?: boolean,
	component: ComponentType,
	isBorderBottom: boolean,
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
		dialogStyles,
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
	} = getCustomHooksData(component, id) as any;


	return (
		<>
			<ContainerMUI sx={isBorderBottom ? {} : {
				borderBottom: '0px solid red !important',
				paddingBottom: '0 !important',
			}}>
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
			{component == 'wait' && (
				<>
					{isAdmin && (
						<ModalConfirmUI
							open={isDeleteModal}
							dialogSx={dialogStyles}
							title='Вы точно хотите удалить?'
							onClickYes={handleDeleteOrder(id)}
							onClickNo={handleToggleModal(setIsDeleteModal)}
							buttonNoText='Нет'
						/>
					)}
					{isAdmin && (
						<OrderStatusModal
							successCallback={handleSuccessChangeStatus(id)}
							orderItem={orderItem}
							open={isStatusModal}
							onClose={handleToggleModal(setIsStatusModal)}
						/>
					)}
				</>
			)}
			{component == 'stock' && (
				<>
					<ModalConfirmUI
						open={isReturnOrder}
						dialogSx={dialogStyles}
						title='Вы точно хотите вернуть посылку?'
						onClickYes={handleReturnOrder(id)}
						onClickNo={handleToggleModal(setIsReturnOrder)}
						buttonNoText='Нет'
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
