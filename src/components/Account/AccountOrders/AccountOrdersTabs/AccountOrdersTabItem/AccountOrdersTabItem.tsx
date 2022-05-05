import React, {FC, useMemo} from 'react';
import {ITabsData} from '@/components/Account/AccountOrders/AccountOrdersTabs/type';
import {
	useAccountOrdersTabItemStyles
} from '@/components/Account/AccountOrders/AccountOrdersTabs/AccountOrdersTabItem/style';
import Link from 'next/link';
import {useCustomRouter} from '@/hooks/useCustomRouter';

const AccountOrdersTabItem: FC<ITabsData> = ({title, link}) => {

	const {
		router,
		getPathName
	} = useCustomRouter();

	const dopItemStyles = useMemo(() => {
		if (getPathName().match(link.split('?')[0])) return itemActive;
		return {};
	}, [router]);


	// UI
	return (
		<ItemMUI sx={dopItemStyles}>
			<Link href={link}>
				{title}
			</Link>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	itemActive,
} = useAccountOrdersTabItemStyles();

export default React.memo(AccountOrdersTabItem);
