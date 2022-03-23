import React from 'react';
import {NextPage} from 'next';

import AccountPage from '../../src/components/Account/Account';
import AccountPersonalData from '../../src/components/Account/AccountPersonalData/AccountPersonalData';

const Account: NextPage = () => {
	return (
		<AccountPage>
			<AccountPersonalData />
		</AccountPage>
	);
};

export default React.memo(Account);
