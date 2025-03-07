import React, {FC} from 'react';
import Tabs from '../AnyPage/Tabs/Tabs';
import AccountUrlArray from './AccountTabsData.json';
import {useAccountPageStyle} from './style';
import { useAccount } from '@/components/Account/useAccount';
import AccountSearch from '@/components/Account/AccountSearch/AccountSearch';


interface IAccountPage {
	renderTabs?: boolean,
	children: React.ReactChild | React.ReactNode,
	allWaitPage?: boolean
}

const AccountPage: FC<IAccountPage> = ({
	renderTabs = true,
	children,
	allWaitPage = false
}) => {

	const {
		isAdmin,
		adminSwitchIdToUser,
		adminSwitchUserModel,
	} = useAccount();


	return (
		<AccountWrapperUI>
			{isAdmin && (
				<SearchContainerMUI>
					<AccountSearch/>
				</SearchContainerMUI>
			)}

			{/* {isAdmin?<AccountAllProductList/>:null} */}

		
				


			{!!(isAdmin && (adminSwitchIdToUser && adminSwitchUserModel || allWaitPage)) && (
				<>
					{renderTabs && ( allWaitPage?null: 
						<Tabs
							data={AccountUrlArray}
						/>
					)}
					{children}
				</>
			)}
			{!isAdmin && (
				<>
					{renderTabs && (
						<Tabs
							data={AccountUrlArray}
						/>
					)}
					{children}
				</>
			)}
		</AccountWrapperUI>
	);
};

const {
	AccountWrapperUI,
	SearchContainerMUI,
} = useAccountPageStyle();

export default React.memo(AccountPage);
