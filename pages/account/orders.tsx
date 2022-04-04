import React from 'react';
import {NextPage} from 'next';

import AccountPage from '../../src/components/Account/Account';
import AccountOrders from '../../src/components/Account/AccountOrders/AccountOrders';
// import WithAuth from '@/components/HOC/WithAuth/WithAuth';

const Account: NextPage = () => {
	return (
		<AccountPage>
			<AccountOrders />
		</AccountPage>
	);
};

export default React.memo(Account);
// export default React.memo(WithAuth(Account));
