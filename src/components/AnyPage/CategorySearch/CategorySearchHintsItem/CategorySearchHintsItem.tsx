import React, { FC } from 'react';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {useCategorySearchHintsItemStyles} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/style';
import {
	useCategorySearchHintsItem
} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/useCategorySearchHintsItem';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import AccountSearchHint from '@/components/Account/AccountSearch/AccountSearchHint/AccountSearchHint';

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
	} = useCategorySearchHintsItem(active, title, isMouseEnter);

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
					/>
				) : (
					<ItemTextMUI>
						{title}
					</ItemTextMUI>
				)}
			</ButtonMUI>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	ButtonMUI,
	ItemTextMUI
} = useCategorySearchHintsItemStyles();

export default React.memo(CategorySearchHintsItem);
