import React from 'react';
import {NextPage} from 'next';

import AccountPage from '../../src/components/Account/Account';
import AccountOrders from '../../src/components/Account/AccountOrders/AccountOrders';

const Account: NextPage = () => {
	return (
		<AccountPage>
			<AccountOrders />
		</AccountPage>
	);
};

export default React.memo(Account);
