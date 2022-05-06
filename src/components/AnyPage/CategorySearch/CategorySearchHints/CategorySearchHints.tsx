import React, { FC, useMemo } from 'react';
import {
	useCategorySearchHinstStyles,
} from '@/components/AnyPage/CategorySearch/CategorySearchHints/style';
import CategorySearchHintsItem
	from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/CategorySearchHintsItem';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import AccountSearchListTitle from '@/components/Account/AccountSearch/AccountSearchListTitle/AccountSearchListTitle';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';

interface ICategorySearchHintsProps {
	hintsData: IHints[] | IAdminHintsData[],
	isMouseEnter: boolean;
	activeSuggestion: number;
	isVisibleHints: boolean
	handleChangeActiveSuggestion: (hintCount: number) => () => void;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
	handleClickHintItem: (hintName: string, hints: IHints & IAdminHintsData) => () => void;
	component: 'account' | 'shops',
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
		component = 'shops'
	}
) => {

	const isAccount = useMemo(() => (
		component === 'account'
	), [component]);
	
	
	return (
		isVisibleHints ? (
			<ContainerMUI>
				<ListMUI
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{isAccount && (
						<AccountSearchListTitle/>
					)}
					{hintsData.map((hint, index) => (
						<CategorySearchHintsItem
							key={hint.url}
							url={hint.url}
							title={hint.title}
							hint={hint}
							hintCount={index + 1}
							active={index + 1 === activeSuggestion}
							activeSuggestion={activeSuggestion}
							isMouseEnter={isMouseEnter}
							onMouseMove={handleMouseEnter}
							handleClickHintItem={handleClickHintItem}
							handleChangeActiveSuggestion={handleChangeActiveSuggestion}
							isAccount={isAccount}
						/>
					))}
				</ListMUI>
			</ContainerMUI>
		) : null
	);
};

const { ListMUI, ContainerMUI } = useCategorySearchHinstStyles();

export default React.memo(CategorySearchHints);
