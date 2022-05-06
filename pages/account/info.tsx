import React from 'react';
import {NextPage} from 'next';

import AccountPage from '../../src/components/Account/Account';
import AccountPersonalData from '../../src/components/Account/AccountPersonalData/AccountPersonalData';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';

const Account: NextPage = () => {
	return (
		<AccountPage>
			<AccountPersonalData />
		</AccountPage>
	);
};

export default React.memo(WithAuth(Account));
