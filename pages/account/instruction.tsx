import React from 'react';
import {NextPage} from 'next';

import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountPage from '@/components/Account/Account';
import AccountInstruction from '@/components/Account/AccountInstruction/AccountInstruction';
import { useMobile } from '@/hooks/useMedia';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Instruction : NextPage = () => {

	const {
		isMobile
	} = useMobile();

	console.log('isMobile: ', isMobile);

	return (
		<HeaderLayout>
			<AccountPage renderTabs={!isMobile}>
				<AccountInstruction />
			</AccountPage>
		</HeaderLayout>
		
	);
};

export default React.memo(WithAuth(Instruction));
