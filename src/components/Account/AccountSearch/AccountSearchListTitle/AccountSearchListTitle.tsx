import React from 'react';
import { useAccountSearchListTitleStyles } from '@/components/Account/AccountSearch/AccountSearchListTitle/style';

const AccountSearchListTitle = () => {
	return (
		<ContainerMUI>
			<ItemMUI>
				User ID
			</ItemMUI>
			<ItemMUI>
				E-Mail
			</ItemMUI>
			<ItemMUI>
				Order
			</ItemMUI>
			<ItemMUI>
				Track Number
			</ItemMUI>
			<ItemMUI>
				Name
			</ItemMUI>
		</ContainerMUI>
	);
};

const {
	ItemMUI,
	ContainerMUI
} = useAccountSearchListTitleStyles();

export default React.memo(AccountSearchListTitle);
