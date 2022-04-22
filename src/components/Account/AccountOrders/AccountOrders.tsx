import React, {FC} from 'react';
import AccountOrdersTabs from '@/components/Account/AccountOrders/AccountOrdersTabs/AccountOrdersTabs';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';

interface IAccountOrdersProps {
	children: React.ReactChildren | React.ReactNode;
}

const AccountOrders: FC<IAccountOrdersProps> = ({children}) => {
	return (
		<ContainerMUI>
			<AccountOrdersTabs/>
			{children}
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrders);
