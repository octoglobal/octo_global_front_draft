import React, {FC} from 'react';
import {IOrderModel} from '@/models/IOrderModel';
import {useOrderItemStyles} from '@/components/AnyPage/OrderItem/style';
import OrderItemTitle from '@/components/AnyPage/OrderItem/OrderItemTitle/OrderItemTitle';
import OrderItemBody from '@/components/AnyPage/OrderItem/OrderItemBody/OrderItemBody';
import ModalConfirmUI from '../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';
import {useOrderItemWait} from '@/components/AnyPage/OrderItem/useOrderItemWait';
import OrderStatusModal from '@/components/AnyPage/OrderItem/OrderStatusModal/OrderStatusModal';
import {useOrderItemStock} from '@/components/AnyPage/OrderItem/useOrderItemStock';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';
import {SxProps} from '@mui/material';


type ComponentType = 'wait' | 'stock' | 'send';

const getCustomHooksData = (component: ComponentType) => {
	if (component === 'wait') {
		const waitData = useOrderItemWait();
		return waitData;
	}
	if (component === 'stock') {
		const stockData = useOrderItemStock();
		return stockData;
	}
};




interface IOrderItemProps {
	orderItem: IOrderModel,
	visibleDropDown: boolean,
	visibleCheckbox: boolean,
	visibleTrackNumber?: boolean,
	component: ComponentType
}

const OrderItem: FC<IOrderItemProps> = (
	{
		visibleCheckbox,
		visibleDropDown,
		orderItem,
		visibleTrackNumber = true,
		component
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
		setIsDeleteModal,
		setIsStatusModal,
		handleDeleteOrder,
		handleToggleModal,
		handleSuccessChangeStatus
	} = getCustomHooksData(component) as any;


	return (
		<>
			<ContainerMUI>
				<OrderItemTitle
					id={id}
					title={title}
					longId={longId}
					visibleCheckbox={visibleCheckbox}
					visibleDropDown={visibleDropDown}
					dropItems={dropDownData}
				/>
				<OrderItemBody
					title={title}
					visibleTrackNumber={visibleTrackNumber}
					tracking_link={tracking_link}
					trackNumber={trackNumber}
					comment={comment}
				/>
			</ContainerMUI>
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
	);
};

const {
	ContainerMUI
} = useOrderItemStyles();

export default React.memo(OrderItem);
