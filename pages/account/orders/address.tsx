import React from 'react';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import AccountOrdersAddress from '@/components/Account/AccountOrdersAddress/AccountOrdersAddress';

const Address = () => {
	return (
		<AccountPage>
			<AccountOrders isTabs={false}>
				<AccountOrdersAddress/>
			</AccountOrders>
		</AccountPage>
	);
};

export default React.memo(Address);
