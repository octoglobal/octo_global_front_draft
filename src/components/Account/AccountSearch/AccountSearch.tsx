import React from 'react';
import { FormProvider } from 'react-hook-form';
import CategorySearch from '@/components/AnyPage/CategorySearch/CategorySearch';
import { useAccountSearch } from '@/components/Account/AccountSearch/useAccountSearch';
import { useAccountSearchStyles } from '@/components/Account/AccountSearch/style';

const AccountSearch = () => {

	const {
		hints,
		methods,
		onSubmit,
		handleChangeInputValue,
		handleClearInputValue
	} = useAccountSearch();

	return (
		<FormProvider {...methods}>
			<SearchContainerMUI>
				<CategorySearch
					component='account'
					handleKeyDownEnter={() => handleClearInputValue()}
					searchHints={hints}
					onSubmit={onSubmit}
					handleChangeSearchValue={handleChangeInputValue}
				/>
			</SearchContainerMUI>
		</FormProvider>
	);
};

const {
	SearchContainerMUI
} = useAccountSearchStyles();

export default React.memo(AccountSearch);
