import React from 'react';
import { useAccountSearchListTitleStyles } from '@/components/Account/AccountSearch/AccountSearchListTitle/style';

const AccountSearchListTitle = () => {
	return (
		<ContainerMUI>
			<ItemIdMUI>
				User ID
			</ItemIdMUI>
			<ItemEmailMUI>
				E-Mail
			</ItemEmailMUI>
			<ItemOrderMUI>
				Order
			</ItemOrderMUI>
			<ItemTrackMUI>
				Track Number
			</ItemTrackMUI>
			<ItemNameMUI>
				Name
			</ItemNameMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	ItemIdMUI,
	ItemEmailMUI,
	ItemOrderMUI,
	ItemTrackMUI,
	ItemNameMUI
} = useAccountSearchListTitleStyles();

export default React.memo(AccountSearchListTitle);
