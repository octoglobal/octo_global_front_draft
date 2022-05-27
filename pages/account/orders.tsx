import React from 'react';
import {NextPage} from 'next';

import AccountPage from '../../src/components/Account/Account';
import AccountOrders from '../../src/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';

const Account: NextPage = () => {
	return (
		<HeaderLayout>
			<AccountPage>
				<AccountOrders>
					<h1>ok</h1>
				</AccountOrders>
			</AccountPage>
		</HeaderLayout>
		
	);
};

export default React.memo(WithAuth(Account));
