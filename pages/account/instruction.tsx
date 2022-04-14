import React from 'react';
import {NextPage} from 'next';

import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountPage from '@/components/Account/Account';
import AccountInstruction from '@/components/Account/AccountInstruction/AccountInstruction';
import { useMobile } from '@/hooks/useMedia';

const Instruction : NextPage = () => {

	const {
		isMobile
	} = useMobile();

	console.log('isMobile: ', isMobile);

	return (
		<AccountPage renderTabs={!isMobile}>
			<AccountInstruction />
		</AccountPage>
	);
};

export default React.memo(WithAuth(Instruction));
