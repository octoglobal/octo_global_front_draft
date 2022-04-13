import React, {FC} from 'react';
import {
	useCategorySearchHinstStyles,
} from '@/components/AnyPage/CategorySearch/CategorySearchHints/style';
import CategorySearchHintsItem
	from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/CategorySearchHintsItem';
import {IHints} from '@/components/AnyPage/CategorySearch/types';

interface ICategorySearchHintsProps {
	hintsData: IHints[],
	isMouseEnter: boolean;
	activeSuggestion: number;
	isVisibleHints: boolean
	handleChangeActiveSuggestion: (hintCount: number) => () => void;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
	handleClickHintItem: (hintName: string) => () => void;
}

const CategorySearchHints: FC<ICategorySearchHintsProps> = (
	{
		hintsData,
		isMouseEnter,
		isVisibleHints,
		handleMouseEnter,
		handleMouseLeave,
		activeSuggestion,
		handleClickHintItem,
		handleChangeActiveSuggestion,
	}
) => {
	return (
		isVisibleHints ? (
			<ContainerMUI>
				<ListMUI
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{hintsData.map((hint, index) => (
						<CategorySearchHintsItem
							key={hint.url}
							url={hint.url}
							title={hint.title}
							hintCount={index + 1}
							active={index + 1 === activeSuggestion}
							activeSuggestion={activeSuggestion}
							isMouseEnter={isMouseEnter}
							onMouseMove={handleMouseEnter}
							handleClickHintItem={handleClickHintItem}
							handleChangeActiveSuggestion={handleChangeActiveSuggestion}
						/>
					))}
				</ListMUI>
			</ContainerMUI>
		) : null
	);
};

const { ListMUI, ContainerMUI } = useCategorySearchHinstStyles();

export default React.memo(CategorySearchHints);
