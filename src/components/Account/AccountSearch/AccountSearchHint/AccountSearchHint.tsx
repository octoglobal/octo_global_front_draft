import React, { FC } from 'react';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useAccountSearchHintStyles } from '@/components/Account/AccountSearch/AccountSearchHint/style';


interface IAccountSearchHintProps {
	hint: IAdminHintsData,
	markText: (title: string | undefined | null, searchValue: string) => FC | React.ReactElement | string,
	searchValue: string,
	isCustomSize: boolean,
}


const AccountSearchHint: FC<IAccountSearchHintProps> = ({hint, markText,searchValue,isCustomSize}) => {
	
	const trackNumber = markText(hint.trackNumber?.toString() ,searchValue );
	const ordernumver = markText(hint.orderNumber?.toString() ,searchValue );
	

	return (
		<ContainerMUI>
			<HintItemuserAreaIdMUI>				
			 {isCustomSize?'id': null} {markText(hint.userAreaId?.toString() ,searchValue ) }				
			</HintItemuserAreaIdMUI>
			<HintItemEmailMUI>				
				{markText(hint.email ,searchValue )}				
			</HintItemEmailMUI>
			<HintItemOrderMUI>
				{isCustomSize? ordernumver?ordernumver : 'нет заказа':ordernumver}				
			</HintItemOrderMUI>
			<HintItemTrackMUI>
				{isCustomSize? trackNumber?trackNumber : 'нет номера':trackNumber}			
			</HintItemTrackMUI>
			<HintItemNameMUI>				
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
