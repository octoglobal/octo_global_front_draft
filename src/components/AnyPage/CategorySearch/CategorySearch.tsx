import React, {FC} from 'react';
import {useCategorySearchStyles} from '@/components/AnyPage/CategorySearch/style';
import {Controller} from 'react-hook-form';
import CategorySearchHint from '@/components/AnyPage/CategorySearch/CategorySearchHints/CategorySearchHints';
import {useCategorySearch} from '@/components/AnyPage/CategorySearch/useCategorySearch';

const {SearchContainerMUI, TextFieldSearch} = useCategorySearchStyles();

const CategorySearch: FC = () => {
	const {
		control,
		hintsData,
		isMouseEnter,
		handleKeyDown,
		isVisibleHints,
		activeSuggestion,
		handleMouseEnter,
		handleMouseLeave,
		handleChangeFocus,
		handleClickHintItem,
		handleChangeActiveSuggestion
	} = useCategorySearch();

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
			{!!isVisibleHints && (
				<CategorySearchHint
					hintsData={hintsData}
					isMouseEnter={isMouseEnter}
					isVisibleHints={!!isVisibleHints}
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

export default React.memo(CategorySearch);
