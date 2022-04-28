import React from 'react';
import {useAccountOrdersWait} from '@/components/Account/AccountOrders/AccountOrdersWait/useAccountOrdersWait';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import { FormProvider } from 'react-hook-form';
import AdminBottomMenu from '@/components/Account/AdminBottomMenu/AdminBottomMenu';

const AccountOrdersWait = () => {
	const {
		isAdmin,
		methods,
		isAdminMenu,
		buttonsData,
		isDataLength,
		orderWaitData,
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
						/>
					))
				)}
				{isAdminMenu && (
					<AdminBottomMenu
						buttons={buttonsData}
					/>
				)}
			</FormProvider>
		</WrapperOrdersMUI>
	);
};

const {
	WrapperOrdersMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersWait);
