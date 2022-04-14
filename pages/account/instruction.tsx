import React from 'react';
import {NextPage} from 'next';

import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountPage from '@/components/Account/Account';
import AccountInstruction from '@/components/Account/AccountInstruction/AccountInstruction';

const Instruction : NextPage = () => {
	return (
		<AccountPage>
			<AccountInstruction />
		</AccountPage>
	);
};

export default React.memo(WithAuth(Instruction));
