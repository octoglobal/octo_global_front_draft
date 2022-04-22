import React from 'react';
import {useAccountOrdersWait} from '@/components/Account/AccountOrders/AccountOrdersWait/useAccountOrdersWait';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import { FormProvider } from 'react-hook-form';

const AccountOrdersWait = () => {

	const {
		methods,
		isDataLength,
		orderWaitData
	} = useAccountOrdersWait();


	return (
		<WrapperOrdersMUI>
			<FormProvider {...methods}>
				{isDataLength && (
					orderWaitData.map(order => (
						<OrderItem
							visibleCheckbox={true}
							visibleDropDown={true}
							key={`${order.trackNumber}${order.id}`}
							orderItem={order}
							dropItem={[
								{title: 'Текст21', onClick: () => console.log(1)},
								{title: 'Текст2', onClick: () => console.log(1)},
								{title: 'Текст3', onClick: () => console.log(1)},
								{title: 'Текст4', onClick: () => console.log(1)}
							]}
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
