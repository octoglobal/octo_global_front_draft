import React, { useEffect, useState } from 'react';
import AccountOrdersTabItem
	from '@/components/Account/AccountOrders/AccountOrdersTabs/AccountOrdersTabItem/AccountOrdersTabItem';
import {ITabsData} from '@/components/Account/AccountOrders/AccountOrdersTabs/type';
import {useAccountOrdersTabStyles} from '@/components/Account/AccountOrders/AccountOrdersTabs/style';
import { useRouter } from 'next/router';
import { getLocationWindow } from '@/services/services';
import { useUserStore } from '@/hooks/useUserStore';

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
		title: 'Отправленые',
		link: '/account/orders/send',
	},
	{
		title: '+ Добавить',
		link: '/account/orders/add',
	}
];

const AccountOrdersTabs = () => {

	const router = useRouter();
	const [query, setQuery] = useState('');
	const { isAdmin } = useUserStore();

	useEffect(() => {
		const id = getLocationWindow('userId=');
		const email = getLocationWindow('userEmail=');
		let queryStr = '';
		if (isAdmin) {
			if (id) {
				queryStr += `?userId=${id}&`;
			}
			if (email) {
				queryStr += `userEmail=${email}`;
			}
			setQuery(queryStr);

		}
	}, [router, isAdmin]);

	return (
		<ListMUI>
			{tabsData.map(item => (
				<AccountOrdersTabItem
					key={item.link}
					title={item.title}
					link={item.link + query}
				/>
			))}
		</ListMUI>
	);
};

const {
	ListMUI
} = useAccountOrdersTabStyles();

export default React.memo(AccountOrdersTabs);
