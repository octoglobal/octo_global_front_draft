import React, {FC} from 'react';
import {useCategorySearchStyles} from '@/components/AnyPage/CategorySearch/style';
import {Controller} from 'react-hook-form';
import CategorySearchHint from '@/components/AnyPage/CategorySearch/CategorySearchHints/CategorySearchHints';
import {useCategorySearch} from '@/components/AnyPage/CategorySearch/useCategorySearch';
import {ISearchData, SearchSubmitType} from '@/components/Shops/useShopPage';
import { IHints } from '@/components/AnyPage/CategorySearch/types';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';


interface ICategorySearchProps {
	onSubmit: (data: ISearchData | {suggestionIndex: number}, type?: SearchSubmitType) => void;
	searchHints: IHints[] | IAdminHintsData[];
	handleKeyDownEnter: () => void;
	handleChangeSearchValue: (value: string) => void;
	component: 'account' | 'shops';
}

const CategorySearch: FC<ICategorySearchProps> = ({
	onSubmit,
	searchHints,
	handleKeyDownEnter,
	handleChangeSearchValue,
	component = 'shops',
}) => {
	const {
		control,
		isMouseEnter,
		handleKeyDown,
		isVisibleHints,
		activeSuggestion,
		handleMouseEnter,
		handleMouseLeave,
		handleChangeFocus,
		handleClickHintItem,
		handleChangeActiveSuggestion
	} = useCategorySearch(
		onSubmit,
		searchHints,
		handleKeyDownEnter,
		handleChangeSearchValue,
		component,
	);
	
	return (
		<>
			<SearchContainerMUI>
				<Controller
					name='search'
					control={control}
					render={({field: {value, onChange}}) => (
						<TextFieldSearch
							value={value}
							autoComplete='off'
							onFocus={handleChangeFocus(true)}
							onBlur={handleChangeFocus(false)}
							onChange={onChange}
							onKeyDown={handleKeyDown}
							placeholder='Поиск'
						/>
					)}
				/>
			</SearchContainerMUI>
			{isVisibleHints && (
				<CategorySearchHint
					component={component}
					hintsData={searchHints}
					isMouseEnter={isMouseEnter}
					isVisibleHints={isVisibleHints}
					activeSuggestion={activeSuggestion}
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
					handleClickHintItem={handleClickHintItem}
					handleChangeActiveSuggestion={handleChangeActiveSuggestion}
				/>
			)}
		</>
	);
};

const {
	SearchContainerMUI,
	TextFieldSearch
} = useCategorySearchStyles();


export default React.memo(CategorySearch);
