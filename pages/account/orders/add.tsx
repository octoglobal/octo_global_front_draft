import React from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersAdd from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountOrdersAdd';
import AccountAddInfo from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountAddInfo/AccountAddInfo';
import {styled} from '@mui/material';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Add: NextPage = () => {
	return (
		<HeaderLayout>			
			<AccountPage>
				<AccountOrders>
					<AccountOrdersAdd/>
					<AccountInfoContainerMUI>
						<AccountAddInfo/>
					</AccountInfoContainerMUI>
				</AccountOrders>
			</AccountPage>
		</HeaderLayout>
	);
};

const AccountInfoContainerMUI = styled('div')(({theme}) => ({
	[theme.breakpoints.down(1025)]: {
		display: 'none'
	},
}));

export default React.memo(WithAuth(Add));
