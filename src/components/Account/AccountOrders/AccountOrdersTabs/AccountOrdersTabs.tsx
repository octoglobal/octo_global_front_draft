import React from 'react';
import AccountOrdersTabItem
	from '@/components/Account/AccountOrders/AccountOrdersTabs/AccountOrdersTabItem/AccountOrdersTabItem';
import {ITabsData} from '@/components/Account/AccountOrders/AccountOrdersTabs/type';
import {useAccountOrdersTabStyles} from '@/components/Account/AccountOrders/AccountOrdersTabs/style';

const tabsData: ITabsData[] = [
	{
		title: 'Ожидаемые',
		link: '/account/orders/wait',
	},
	{
		title: 'На складе',
		link: '/account/orders/stock',
	},
	{
		title: 'Отправлены',
		link: '/account/orders/send',
	},
	{
		title: '+ Добавить',
		link: '/account/orders/add',
	}
];

const AccountOrdersTabs = () => {
	return (
		<ListMUI>
			{tabsData.map(item => (
				<AccountOrdersTabItem
					key={item.link}
					{...item}
				/>
			))}
		</ListMUI>
	);
};

const {
	ListMUI
} = useAccountOrdersTabStyles();

export default React.memo(AccountOrdersTabs);
