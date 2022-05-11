import React, { FC } from 'react';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useAccountSearchHintStyles } from '@/components/Account/AccountSearch/AccountSearchHint/style';
import { ellipsis } from '@/lib/services/services';

interface IAccountSearchHintProps {
	hint: IAdminHintsData,
	markText: (title: string | undefined | null, searchValue: string, count: number) => FC | React.ReactElement,
	searchValue: string
}




const AccountSearchHint: FC<IAccountSearchHintProps> = ({hint, markText,searchValue}) => {

	// const toStr = (elem): string | undefined=>{	
	
	// 	if (elem.props.children) {		
	// 		const res = [];	
	// 		for (let i = 0; i < elem.props.children.length; i++) {
	// 			if ( typeof (elem.props.children[i]) === 'object' && elem.props.children[i] !== null){
	// 				res.push(elem.props.children[i].props.children);
	// 			} else {
	// 				res.push(elem.props.children[i]);
	// 			}					
	// 		}
			
	// 		return res.join('') ;
	// 	}
	// 	return undefined;	
		
	// };

	// const tn = markText(hint.trackNumber?.toString() ,searchValue);
	// console.log(tn);

	return (
		<ContainerMUI>
			<HintItemuserAreaIdMUI>
				{/* {ellipsis(hint.userAreaId.toString() , 5)} */}
				{markText(hint.userAreaId?.toString() ,searchValue , 15) }
				{/* { ellipsis( toStr(markText(hint.userAreaId?.toString() ,searchValue)), 7)} */}
			</HintItemuserAreaIdMUI>
			<HintItemEmailMUI>
				{/* {hint.email} */}
				{markText(hint.email ,searchValue , 20)}
				{/* { ellipsis( toStr(markText(hint.email ,searchValue)), 15)} */}
			</HintItemEmailMUI>
			<HintItemOrderMUI>
				{/* {hint.orderNumber} */}
				{markText(hint.orderNumber?.toString() ,searchValue , 15)}
				{/* { ellipsis( toStr(markText(hint.orderNumber?.toString() ,searchValue)), 10)} */}
			</HintItemOrderMUI>
			<HintItemTrackMUI>
				{/* {hint.trackNumber} */}
				{markText(hint.trackNumber?.toString() ,searchValue , 15)}
			
				{/* {ellipsis(tn, 3)} */}
				{/* { ellipsis( toStr(markText(hint.trackNumber?.toString() ,searchValue)), 10)} */}
			</HintItemTrackMUI>
			<HintItemNameMUI>
				{/* {hint.name} */}
				{markText(hint.name ,searchValue , 20)}
				{/* { ellipsis( toStr(markText(hint.name ,searchValue)), 15)} */}
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
