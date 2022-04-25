import React from 'react';
import {useAccountOrdersWait} from '@/components/Account/AccountOrders/AccountOrdersWait/useAccountOrdersWait';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import { FormProvider } from 'react-hook-form';

const AccountOrdersWait = () => {
	const {
		isAdmin,
		methods,
		isDataLength,
		orderWaitData,
	} = useAccountOrdersWait();


	return (
		<WrapperOrdersMUI>
			<FormProvider {...methods}>
				{isDataLength && (
					orderWaitData.map(order => (
						<OrderItem
							visibleCheckbox={false}
							visibleDropDown={isAdmin}
							key={`${order.trackNumber}${order.id}`}
							orderItem={order}
						/>
					))
				)}
			</FormProvider>
		</WrapperOrdersMUI>
	);
};

const {
	WrapperOrdersMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersWait);
