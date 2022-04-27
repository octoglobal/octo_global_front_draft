import React, {FC} from 'react';
import {IOrderModel} from '@/models/IOrderModel';
import {useOrderItemStyles} from '@/components/AnyPage/OrderItem/style';
import OrderItemTitle from '@/components/AnyPage/OrderItem/OrderItemTitle/OrderItemTitle';
import OrderItemBody from '@/components/AnyPage/OrderItem/OrderItemBody/OrderItemBody';
import ModalConfirmUI from '../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';
import {useOrderItemWait} from '@/components/AnyPage/OrderItem/useOrderItemWait';
// import ModalUI from '../../../UI/UIComponents/ModalUI/ModalUI';
import OrderStatusModal from '@/components/AnyPage/OrderItem/OrderStatusModal/OrderStatusModal';

interface IOrderItemProps {
	orderItem: IOrderModel,
	visibleDropDown: boolean,
	visibleCheckbox: boolean,
}

const OrderItem: FC<IOrderItemProps> = (
	{
		visibleCheckbox,
		visibleDropDown,
		orderItem,
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
	} = useOrderItemWait();


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
					successCallback={() => console.log(123)}
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
