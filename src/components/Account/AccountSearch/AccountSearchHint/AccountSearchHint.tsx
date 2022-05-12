import React, { FC } from 'react';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useAccountSearchHintStyles } from '@/components/Account/AccountSearch/AccountSearchHint/style';


interface IAccountSearchHintProps {
	hint: IAdminHintsData,
	markText: (title: string | undefined | null, searchValue: string, count: number) => FC | React.ReactElement | string,
	searchValue: string,
	isCustomSize: boolean,
}




const AccountSearchHint: FC<IAccountSearchHintProps> = ({hint, markText,searchValue,isCustomSize}) => {
	
	const tn = markText(hint.trackNumber?.toString() ,searchValue , 15);
	const on = markText(hint.orderNumber?.toString() ,searchValue , 15);
	

	return (
		<ContainerMUI>
			<HintItemuserAreaIdMUI>				
			 {isCustomSize?'id': null} {markText(hint.userAreaId?.toString() ,searchValue , 15) }				
			</HintItemuserAreaIdMUI>
			<HintItemEmailMUI>				
				{markText(hint.email ,searchValue , 19)}				
			</HintItemEmailMUI>
			<HintItemOrderMUI>
				{isCustomSize? on?on : 'нет номера':on}				
			</HintItemOrderMUI>
			<HintItemTrackMUI>
				{isCustomSize? tn?tn : 'нет номера':on}			
			</HintItemTrackMUI>
			<HintItemNameMUI>			
				{markText(hint.name ,searchValue , 19)}			
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
