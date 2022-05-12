import React from 'react';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import { FormProvider } from 'react-hook-form';
import {useAccountOrdersStock} from '@/components/Account/AccountOrders/AccountOrdersStock/useAccountOrdersStock';
import AdminBottomMenu from '@/components/Account/AdminBottomMenu/AdminBottomMenu';
import PackageItem from '@/components/AnyPage/PackageItem/PackageItem';
import AccountOrdersPlaceholder
	from '@/components/Account/AccountOrders/AccountOrdersPlaceholder/AccountOrdersPlaceholder';

const AccountOrdersStock = () => {

	const {
		isAdmin,
		isUserText,
		methods,
		stockData,
		packageData,
		buttonsData,
		isVisibleMenu,
		isDataLength,
		packageDopDownData,
		isVisiblePlaceholder,
	} = useAccountOrdersStock();


	return (
		<WrapperOrdersMUI>
			<FormProvider {...methods}>
				{!!isDataLength  && (
					<ListMUI>
						{!!stockData.length && (
							stockData.map(order => (
								<OrderItem
									component='stock'
									visibleCheckbox={stockData.length > 1}
									visibleDropDown={true}
									visibleTrackNumber={false}
									key={`${order.trackNumber}${order.id}`}
									orderItem={order}
								/>
							))
						)}
						{!!packageData.length && (
							packageData.map(packageItem => (
								<PackageItem
									key={`${packageItem.id}${packageItem.longId}${packageItem}`}
									component='stock'
									dropItems={packageDopDownData}
									packageData={packageItem}
								/>
							))
						)}
					</ListMUI>
				)}
				{isVisiblePlaceholder && (
					<PlaceholderWrapperMUI>
						<AccountOrdersPlaceholder
							text={isAdmin ? 'У пользователя нет заказов' : 'У вас еще нет заказов'}
						/>
					</PlaceholderWrapperMUI>
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
	WrapperOrdersMUI,
	PlaceholderWrapperMUI
} = useAccountOrdersStyles();


export default React.memo(AccountOrdersStock);
