import React from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';

const Send: NextPage = () => {

	return (
		<AccountPage>
			<AccountOrders>
				<h1>ok</h1>
			</AccountOrders>
		</AccountPage>
	);
};

export default React.memo(WithAuth(Send));
