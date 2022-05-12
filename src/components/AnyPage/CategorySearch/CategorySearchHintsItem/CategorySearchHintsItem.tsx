import React, { FC } from 'react';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {useCategorySearchHintsItemStyles} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/style';
import {
	useCategorySearchHintsItem
} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/useCategorySearchHintsItem';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import AccountSearchHint from '@/components/Account/AccountSearch/AccountSearchHint/AccountSearchHint';
import {useWatch} from 'react-hook-form';
import { ellipsis } from '@/lib/services/services';
interface ICategorySearchHintsItemProps extends IHints {
	hint: IHints | IAdminHintsData;
	active: boolean;
	hintCount: number;
	isMouseEnter: boolean;
	onMouseMove: () => void;
	activeSuggestion: number;
	handleChangeActiveSuggestion: (hintCount: number) => () => void;
	handleClickHintItem: (hintName: string, hints: IHints & IAdminHintsData) => () => void;
	isAccount: boolean
}

const CategorySearchHintsItem: FC<ICategorySearchHintsItemProps> = (
	{
		hint,
		title,
		active,
		hintCount,
		isMouseEnter,
		handleClickHintItem,
		handleChangeActiveSuggestion,
		isAccount = false,		
	}
) => {

	const {
		activeStyles,
		isCustomSize,
	} = useCategorySearchHintsItem(active, title, isMouseEnter);
	
	
	const searchValue = useWatch({name: 'search'});
	
	const editTextValue = (title: string | null | undefined,searchValue:string, count:number) =>{		
		if (searchValue && title){	
			const shortTitle= ellipsis(title, count);
			const textsArr = shortTitle.toLocaleLowerCase().split(searchValue.toLocaleLowerCase());		
			const result = title.toLocaleLowerCase().match(searchValue.toLocaleLowerCase());			
		
			let markText ;
			if (result?.index !== null && result?.index !== undefined) {
				markText = title.toLocaleLowerCase().slice(result?.index, result?.index  + searchValue.length);
			} else {				
				markText = '';
			}	
			if (markText.length>count){
				textsArr[0] = '';
			}
			console.log(textsArr);
			return <>{textsArr[0]}<TextMarkMUI>{ellipsis(markText, count)}</TextMarkMUI>{textsArr[1]}</>; 			
			
		} else {
			return '';
		}
		
	};
	
	return (
		<ItemMUI>
			<ButtonMUI
				type='submit'
				sx={activeStyles}
				onMouseMove={handleChangeActiveSuggestion(hintCount)}
				onMouseEnter={handleChangeActiveSuggestion(hintCount)}
				onClick={handleClickHintItem(title, hint as IHints & IAdminHintsData)}
			>
				
				{isAccount ? (
					<AccountSearchHint
						hint={hint as IAdminHintsData}
						markText={editTextValue}
						searchValue={searchValue}
						isCustomSize={isCustomSize}
					/>
				) : (
					<ItemTextMUI>						
						{editTextValue(title,searchValue ,title.length)}					
					</ItemTextMUI>
				)}
			</ButtonMUI>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	ButtonMUI,
	ItemTextMUI,
	TextMarkMUI,
	
} = useCategorySearchHintsItemStyles();

export default React.memo(CategorySearchHintsItem);
