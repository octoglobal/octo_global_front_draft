import React from 'react';
import AccountPage from '@/components/Account/Account';
import AccountAllProductList from '@/components/Account/AccountAllProductList/AccountAllProductList';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';

const AllWait = () => {
	
	return (
		<HeaderLayout>

			<AccountPage allWaitPage={true}>
				<AccountAllProductList/>
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(AllWait);
