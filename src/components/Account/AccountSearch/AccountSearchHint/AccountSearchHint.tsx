import React, { FC } from 'react';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useAccountSearchHintStyles } from '@/components/Account/AccountSearch/AccountSearchHint/style';

interface IAccountSearchHintProps {
	hint: IAdminHintsData,
	markText: (title: string | undefined | null, searchValue: string) => FC | React.ReactElement,
	searchValue: string
}

const AccountSearchHint: FC<IAccountSearchHintProps> = ({hint, markText,searchValue}) => {
	return (
		<ContainerMUI>
			<HintItemuserAreaIdMUI>
				{/* {hint.userAreaId} */}
				{markText(hint.userAreaId?.toString() ,searchValue)}
			</HintItemuserAreaIdMUI>
			<HintItemEmailMUI>
				{/* {hint.email} */}
				{markText(hint.email ,searchValue)}
			</HintItemEmailMUI>
			<HintItemOrderMUI>
				{/* {hint.orderNumber} */}
				{markText(hint.orderNumber?.toString() ,searchValue)}
			</HintItemOrderMUI>
			<HintItemTrackMUI>
				{/* {hint.trackNumber} */}
				{markText(hint.trackNumber?.toString() ,searchValue)}
			</HintItemTrackMUI>
			<HintItemNameMUI>
				{/* {hint.name} */}
				{markText(hint.name ,searchValue)}
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
