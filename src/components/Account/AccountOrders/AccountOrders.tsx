import React, {FC} from 'react';
import AccountOrdersTabs from '@/components/Account/AccountOrders/AccountOrdersTabs/AccountOrdersTabs';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';

interface IAccountOrdersProps {
	isTabs?: boolean
	children: React.ReactChildren | React.ReactNode;
}

const AccountOrders: FC<IAccountOrdersProps> = (
	{
		children,
		isTabs = true,
	}
) => {
	return (
		<ContainerMUI>
			{isTabs && <AccountOrdersTabs/>}
			{children}
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrders);
