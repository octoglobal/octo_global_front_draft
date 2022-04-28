import React from 'react';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import { FormProvider } from 'react-hook-form';
import {useAccountOrdersStock} from '@/components/Account/AccountOrders/AccountOrdersStock/useAccountOrdersStock';
import AdminBottomMenu from '@/components/Account/AdminBottomMenu/AdminBottomMenu';

const AccountOrdersStock = () => {

	const {
		isUserText,
		methods,
		stockData,
		buttonsData,
		isVisibleMenu,
		isDataLength,
	} = useAccountOrdersStock();

	return (
		<WrapperOrdersMUI>
			<FormProvider {...methods}>
				{!!isDataLength && (
					<ListMUI>
						{stockData.map(order => (
							<OrderItem
								component='stock'
								visibleCheckbox={true}
								visibleDropDown={true}
								visibleTrackNumber={false}
								key={`${order.trackNumber}${order.id}`}
								orderItem={order}
							/>
						))}
					</ListMUI>
				)}
				<AdminBottomMenu
					isVisibleMenu={isVisibleMenu}
					text={isUserText}
					buttons={buttonsData}
				/>
			</FormProvider>
		</WrapperOrdersMUI>
	);
};

const {
	ListMUI,
	WrapperOrdersMUI
} = useAccountOrdersStyles();


export default React.memo(AccountOrdersStock);
