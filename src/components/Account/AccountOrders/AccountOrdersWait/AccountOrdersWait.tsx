import React from 'react';
import {useAccountOrdersWait} from '@/components/Account/AccountOrders/AccountOrdersWait/useAccountOrdersWait';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import { FormProvider } from 'react-hook-form';
import ModalConfirmUI from '../../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

const AccountOrdersWait = () => {

	const {
		isModal,
		isAdmin,
		methods,
		dialogStyles,
		dropDownData,
		isDataLength,
		orderWaitData,
		handleDeleteOrder,
		handleToggleModal,
	} = useAccountOrdersWait();


	return (
		<WrapperOrdersMUI>
			<FormProvider {...methods}>
				{isDataLength && (
					orderWaitData.map(order => (
						<OrderItem
							visibleCheckbox={isAdmin}
							visibleDropDown={isAdmin}
							key={`${order.trackNumber}${order.id}`}
							orderItem={order}
							dropItem={dropDownData}
						/>
					))
				)}
			</FormProvider>
			{isAdmin && (
				<ModalConfirmUI
					text=''
					open={isModal}
					dialogSx={dialogStyles}
					title='Вы точно хотите удалить?'
					onClickYes={handleDeleteOrder}
					onClickNo={handleToggleModal}
					buttonNoText='Нет'
				/>
			)}
		</WrapperOrdersMUI>
	);
};

const {
	WrapperOrdersMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersWait);
