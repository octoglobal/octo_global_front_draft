import React from 'react';
import AccountPage from '@/components/Account/Account';
import AccountAllProductList from '@/components/Account/AccountAllProductList/AccountAllProductList';


const AllWait = () => {
	
	return (
		<AccountPage allWaitPage={true}>
			<AccountAllProductList/>
		</AccountPage>
	);
};

export default React.memo(AllWait);
