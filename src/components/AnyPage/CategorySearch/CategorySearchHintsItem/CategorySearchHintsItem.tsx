import React, {FC} from 'react';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {useCategorySearchHintsItemStyles} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/style';
import {
	useCategorySearchHintsItem
} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/useCategorySearchHintsItem';

interface ICategorySearchHintsItemProps extends IHints {
	active: boolean;
	hintCount: number;
	isMouseEnter: boolean;
	onMouseMove: () => void;
	activeSuggestion: number;
	handleChangeActiveSuggestion: (hintCount: number) => () => void;
	handleClickHintItem: (hintName: string) => () => void;
}

const CategorySearchHintsItem: FC<ICategorySearchHintsItemProps> = (
	{
		title,
		active,
		hintCount,
		activeSuggestion,
		isMouseEnter,
		handleClickHintItem,
		handleChangeActiveSuggestion
	}
) => {

	const {
		activeStyles,
	} = useCategorySearchHintsItem(active, title, isMouseEnter, activeSuggestion);

	return (
		<ItemMUI>
			<ButtonMUI
				type='submit'
				sx={activeStyles}
				onMouseMove={handleChangeActiveSuggestion(hintCount)}
				onMouseEnter={handleChangeActiveSuggestion(hintCount)}
				onClick={handleClickHintItem(title)}
			>
				{/*{customHint?.length && (*/}
				{/*	<ItemTextMUI dangerouslySetInnerHTML={{__html: customHint}}/>*/}
				{/*) : (*/}
				{/*	<ItemTextMUI>*/}
				{/*		{title}*/}
				{/*	</ItemTextMUI>*/}
				{/*)}*/}
				<ItemTextMUI>
					{title}
				</ItemTextMUI>
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
