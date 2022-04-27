import React, { FC } from 'react';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useAccountSearchHintStyles } from '@/components/Account/AccountSearch/AccountSearchHint/style';

interface IAccountSearchHintProps {
	hint: IAdminHintsData
}

const AccountSearchHint: FC<IAccountSearchHintProps> = ({hint}) => {
	return (
		<ContainerMUI>
			<HintItemMUI>
				{hint.userAreaId}
			</HintItemMUI>
			<HintItemMUI>
				{hint.email}
			</HintItemMUI>
			<HintItemMUI>
				{hint.orderNumber}
			</HintItemMUI>
			<HintItemMUI>
				{hint.trackNumber}
			</HintItemMUI>
			<HintItemMUI>
				{hint.name}
			</HintItemMUI>
		</ContainerMUI>
	);
};

const {
	HintItemMUI,
	ContainerMUI
} = useAccountSearchHintStyles();

export default React.memo(AccountSearchHint);
