import React, { FC } from 'react';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {useCategorySearchHintsItemStyles} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/style';
import {
	useCategorySearchHintsItem
} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/useCategorySearchHintsItem';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import AccountSearchHint from '@/components/Account/AccountSearch/AccountSearchHint/AccountSearchHint';
import {useWatch} from 'react-hook-form';

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
	
	const editTextValue = (title: string | null | undefined,searchValue:string, ) =>{	
	
		if (searchValue && title){				
		
			const indexSeparet = title.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase());
			const BeforeMark = title.slice(0,indexSeparet);
			const result = title.toLocaleLowerCase().match(searchValue.toLocaleLowerCase());

			let markText ;
			let AfterMark;

			if (result?.index !== null && result?.index !== undefined) {
				markText = title.toLocaleLowerCase().slice(result?.index, result?.index  + searchValue.length);
				 AfterMark = title.slice(indexSeparet + markText.length);
				
				
			} else {				
				markText = '';
			}	
			
			return <>{BeforeMark}<TextMarkMUI>{markText }</TextMarkMUI>{AfterMark}</>; 			
			
			
		} else {
			return '';
		}
		
	};
	
	return (
		<ItemMUI>
			{isAccount ? 			
				<LinkMUI
					type='submit'
					sx={activeStyles}
					onMouseMove={handleChangeActiveSuggestion(hintCount)}
					onMouseEnter={handleChangeActiveSuggestion(hintCount)}
					onClick={handleClickHintItem(title, hint as IHints & IAdminHintsData)}
				>
					<AccountSearchHint
						hint={hint as IAdminHintsData}
						markText={editTextValue}
						searchValue={searchValue}
						isCustomSize={isCustomSize}
					/>				
				</LinkMUI>			
			 : 
				<ButtonMUI
					type='submit'
					sx={activeStyles}
					onMouseMove={handleChangeActiveSuggestion(hintCount)}
					onMouseEnter={handleChangeActiveSuggestion(hintCount)}
					onClick={handleClickHintItem(title, hint as IHints & IAdminHintsData)}
				>
					<ItemTextMUI>						
						{editTextValue(title,searchValue)}					
					</ItemTextMUI>				
				</ButtonMUI>}
				
		</ItemMUI>
	);
};

const {
	ItemMUI,
	ButtonMUI,
	ItemTextMUI,
	TextMarkMUI,
	LinkMUI
	
} = useCategorySearchHintsItemStyles();

export default React.memo(CategorySearchHintsItem);
