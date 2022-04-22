import React from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersWait from '@/components/Account/AccountOrders/AccountOrdersWait/AccountOrdersWait';

const Wait: NextPage = () => {
	return (
		<AccountPage>
			<AccountOrders>
				<AccountOrdersWait/>
			</AccountOrders>
		</AccountPage>
	);
};

export default React.memo(WithAuth(Wait));
