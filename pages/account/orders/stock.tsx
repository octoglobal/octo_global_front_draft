import React from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersStock from '@/components/Account/AccountOrders/AccountOrdersStock/AccountOrdersStock';

const Stock: NextPage = () => {
	return (
		<AccountPage>
			<AccountOrders>
				<AccountOrdersStock/>
			</AccountOrders>
		</AccountPage>
	);
};

export default React.memo(WithAuth(Stock));
