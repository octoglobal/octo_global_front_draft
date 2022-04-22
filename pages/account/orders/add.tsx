import React from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersAdd from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountOrdersAdd';

const Add: NextPage = () => {
	return (
		<AccountPage>
			<AccountOrders>
				<AccountOrdersAdd/>
			</AccountOrders>
		</AccountPage>
	);
};

export default React.memo(WithAuth(Add));
