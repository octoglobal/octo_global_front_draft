import React, {FC, useEffect} from 'react';

import Tabs from '../AnyPage/Tabs/Tabs';
import AccountUrlArray from './AccountTabsData.json';
import {useCustomRouter} from '@/hooks/useCustomRouter';

import {useAccountPageStyle} from './style';

interface IAccoutPage {
	children: React.ReactChild | React.ReactNode,
}

const AccountPage: FC<IAccoutPage> = ({children}) => {
	const {
		AccountWrapperUI,
	} = useAccountPageStyle();

	const {router, pushTo} = useCustomRouter();

	// TODO: исправить - пока что захардкожено
	useEffect(() => {
		if(router.asPath.includes('info') && !router.asPath.includes('location')) {
			pushTo(router.asPath, {location: 'ger'});
		}
		if(router.asPath.includes('orders') && !router.asPath.includes('tab')) {
			pushTo(router.asPath, {tab: 0});
		}
	}, [router.asPath]);

	return (
		<AccountWrapperUI>
			<Tabs
				data={AccountUrlArray}
			/>
			{children}
		</AccountWrapperUI>

	);
};

export default React.memo(AccountPage);
