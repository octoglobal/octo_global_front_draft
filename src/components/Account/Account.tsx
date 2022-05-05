import React, {FC} from 'react';
import Tabs from '../AnyPage/Tabs/Tabs';
import AccountUrlArray from './AccountTabsData.json';
import {useAccountPageStyle} from './style';
import { useAccount } from '@/components/Account/useAccount';
import AccountSearch from '@/components/Account/AccountSearch/AccountSearch';

interface IAccountPage {
	renderTabs?: boolean,
	children: React.ReactChild | React.ReactNode,
}

const AccountPage: FC<IAccountPage> = ({
	renderTabs = true,
	children
}) => {

	const {
		isAdmin,
	} = useAccount();

	return (
		<AccountWrapperUI>
			{isAdmin && (
				<AccountSearch/>
			)}
			{renderTabs && (
				<Tabs
					data={AccountUrlArray}
				/>
			)}
			{children}
		</AccountWrapperUI>
	);
};

const {
	AccountWrapperUI,
} = useAccountPageStyle();

export default React.memo(AccountPage);
