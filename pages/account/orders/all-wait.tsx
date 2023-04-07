import React from 'react';
import AccountPage from '@/components/Account/Account';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import AllWaitOrders from '@/components/Account/AllWaitOrders/AllWaitOrders';

const AllWait = () => {

	return (
		<HeaderLayout>
			<AccountPage allWaitPage={true}>
				<AllWaitOrders/>
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(AllWait);
