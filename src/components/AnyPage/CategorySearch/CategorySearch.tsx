import React, {FC, useState} from 'react';
import {useCategorySearchStyles} from '@/components/AnyPage/CategorySearch/style';
import {useFormContext, Controller} from 'react-hook-form';
import CategorySearchHint from '@/components/AnyPage/CategorySearch/CategorySearchHints/CategorySearchHints';
import {useCategorySearch} from '@/components/AnyPage/CategorySearch/useCategorySearch';

const {SearchContainerMUI, TextFieldSearch} = useCategorySearchStyles();

const CategorySearch: FC = () => {
	const {
		isFocus,
		control,
		handleKeyDown,
		activeSuggestion,
		handleChangeFocus,
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
							onFocus={handleChangeFocus(true)}
							onBlur={handleChangeFocus(false)}
							onChange={onChange}
							onKeyDown={handleKeyDown}
							placeholder='Поиск'
						/>
					)}
				/>
			</SearchContainerMUI>
			<CategorySearchHint
				inputFocus={isFocus}
				activeSuggestion={activeSuggestion}
			/>
		</>
	);
};

export default React.memo(CategorySearch);
