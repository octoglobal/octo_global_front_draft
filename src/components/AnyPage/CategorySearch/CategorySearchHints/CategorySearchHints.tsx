import React, {FC, useMemo} from 'react';
import {
	useCategorySearchHints
} from '@/components/AnyPage/CategorySearch/CategorySearchHints/useCategorySearchHints';
import {
	useCategorySearchHinstStyles,
} from '@/components/AnyPage/CategorySearch/CategorySearchHints/style';
import CategorySearchHintsItem
	from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/CategorySearchHintsItem';

interface ICategorySearchHintsProps {
	inputFocus: boolean
	activeSuggestion: number;
}

const CategorySearchHints: FC<ICategorySearchHintsProps> = ({inputFocus, activeSuggestion}) => {

	const { hintsData, isHintsData } = useCategorySearchHints();

	const isVisibleHints = useMemo(() => (
		isHintsData && inputFocus
	), [inputFocus, isHintsData]);

	return (
		isVisibleHints ? (
			<ContainerMUI>
				<ListMUI>
					{hintsData.map(hint => (
						<CategorySearchHintsItem
							active={true}
							key={hint.url}
							title={hint.title}
							url={hint.url}
						/>
					))}
				</ListMUI>
			</ContainerMUI>
		) : null
	);
};

const { ListMUI, ContainerMUI } = useCategorySearchHinstStyles();

export default React.memo(CategorySearchHints);
