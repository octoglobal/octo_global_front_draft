import React, {FC} from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';

import AccountPersonalData from './AccountPersonalData/AccountPersonalData'

import {useAccountPageStyle} from './style';


const AccountPage: FC = () => {
	const {
		AccountWrapper,
		Tab,
		TabPanel,
		TabsList
	} = useAccountPageStyle();

	return (
		<AccountWrapper>
			<TabsUnstyled defaultValue={0}>
				<TabsList>
					<Tab>Личные данные</Tab>
					<Tab>Заказы</Tab>
				</TabsList>
				<TabPanel
					value={0}
				>
					<AccountPersonalData />
				</TabPanel>
				<TabPanel
					value={1}
				>
					Заказы content
				</TabPanel>
			</TabsUnstyled>
		</AccountWrapper>

	);
};

export default React.memo(AccountPage);
