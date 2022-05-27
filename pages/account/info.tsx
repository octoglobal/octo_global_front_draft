import React from 'react';
import {NextPage} from 'next';

import AccountPage from '../../src/components/Account/Account';
import AccountPersonalData from '../../src/components/Account/AccountPersonalData/AccountPersonalData';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Account: NextPage = () => {
	return (
		<HeaderLayout>

			<AccountPage>
				<AccountPersonalData />
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(WithAuth(Account));
