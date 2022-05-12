import React from 'react';
import {useAccountOrdersWait} from '@/components/Account/AccountOrders/AccountOrdersWait/useAccountOrdersWait';
import OrderItem from '@/components/AnyPage/OrderItem/OrderItem';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import {FormProvider} from 'react-hook-form';
import AdminBottomMenu from '@/components/Account/AdminBottomMenu/AdminBottomMenu';
import AccountOrdersPlaceholder
	from '@/components/Account/AccountOrders/AccountOrdersPlaceholder/AccountOrdersPlaceholder';

const AccountOrdersWait = () => {
	const {
		isAdmin,
		methods,
		scrollEmpty,
		isAdminMenu,
		buttonsData,
		isDataLength,
		orderWaitData,
		isVisibleCheckbox,
	} = useAccountOrdersWait();


	return (
		<WrapperOrdersMUI>
			<PageLabelMUI>
				Ожидаемые
			</PageLabelMUI>
			<FormProvider {...methods}>
				{isDataLength && (
					<ListMUI>
						{orderWaitData.map(order => (
							<OrderItem
								component='wait'
								visibleCheckbox={isVisibleCheckbox}
								visibleDropDown={isAdmin}
								key={`${order.trackNumber}${order.id}`}
								orderItem={order}
							/>
						))}
					</ListMUI>
				)}
				{!isDataLength && scrollEmpty && (
					<PlaceholderWrapperMUI>
						<AccountOrdersPlaceholder>
							<>
								<PlaceholderTextMUI>
									Здесь будут отображаться ваши заказы.
								</PlaceholderTextMUI>
								<PlaceholderLinkMUI
									href='/shops'
								>
									За покупками!
								</PlaceholderLinkMUI>
							</>
						</AccountOrdersPlaceholder>
					</PlaceholderWrapperMUI>
				)}
				<AdminBottomMenu
					isVisibleComponents={isAdminMenu}
					isVisibleMenu={isAdminMenu}
					buttons={buttonsData}
				/>
			</FormProvider>
		</WrapperOrdersMUI>
	);
};

const {
	ListMUI,
	PageLabelMUI,
	WrapperOrdersMUI,
	PlaceholderTextMUI,
	PlaceholderLinkMUI,
	PlaceholderWrapperMUI,
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersWait);
