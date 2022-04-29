import React, { FC } from 'react';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useAccountSearchHintStyles } from '@/components/Account/AccountSearch/AccountSearchHint/style';

interface IAccountSearchHintProps {
	hint: IAdminHintsData
}

const AccountSearchHint: FC<IAccountSearchHintProps> = ({hint}) => {
	return (
		<ContainerMUI>
			<HintItemuserAreaIdMUI>
				{hint.userAreaId}
			</HintItemuserAreaIdMUI>
			<HintItemEmailMUI>
				{hint.email}
			</HintItemEmailMUI>
			<HintItemOrderMUI>
				{hint.orderNumber}
			</HintItemOrderMUI>
			<HintItemTrackMUI>
				{hint.trackNumber}
			</HintItemTrackMUI>
			<HintItemNameMUI>
				{hint.name}
			</HintItemNameMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	HintItemuserAreaIdMUI,
	HintItemEmailMUI,
	HintItemOrderMUI,
	HintItemTrackMUI,
	HintItemNameMUI
} = useAccountSearchHintStyles();

export default React.memo(AccountSearchHint);
