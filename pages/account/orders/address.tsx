import React from 'react';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import AccountOrdersAddress from '@/components/Account/AccountOrdersAddress/AccountOrdersAddress';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Address = () => {
	return (
		<HeaderLayout>

			<AccountPage>
				<AccountOrders isTabs={false}>
					<AccountOrdersAddress/>
				</AccountOrders>
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(Address);
