import React, {FC} from 'react';
import {useCategorySearchStyles} from '@/components/AnyPage/CategorySearch/style';
import {Controller} from 'react-hook-form';
import CategorySearchHint from '@/components/AnyPage/CategorySearch/CategorySearchHints/CategorySearchHints';
import {useCategorySearch} from '@/components/AnyPage/CategorySearch/useCategorySearch';
import {ISearchData, SearchSubmitType} from '@/components/Shops/useShopPage';
import { IHints } from '@/components/AnyPage/CategorySearch/types';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';

import EuroExchange from '@/components/AnyPage/EuroExchange/EuroExchange';
import DropDownUI from 'UI/UIComponents/DropDownUI/DropDownUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

import { useRouter } from 'next/router';

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
		handleChangeActiveSuggestion,
		isAdmin,
		isMobile,
		isAccount,
		dropItems,
		dropDownOpen,
		setDropDownOpen,
		ButtonSxStyle,
	} = useCategorySearch(
		onSubmit,
		searchHints,
		handleKeyDownEnter,
		handleChangeSearchValue,
		component,
	);	
	
	const router = useRouter();
	return (
		<SearchContainerWrapperMUI>
			{isAdmin && isAccount?<EuroPositionMUI>
				{isMobile?null:<EuroExchange/>	}	
			</EuroPositionMUI>: null}
			 
					
			<SearchWrapperMUI>
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
				
				{isAdmin && isAccount? isMobile? <ButtonUI onClick={()=>router.push('/account/orders/all-wait')} sx={ButtonSxStyle}>Показать все ожидаемые товары</ButtonUI>:<DropDownWrapperMUI>
					<DropDownUI
						itemId={0}
						externalOpen={dropDownOpen}
						setExternalOpen={setDropDownOpen}
						dropItems={dropItems}
						containerStyles={{ width: 261}}
					/>
				</DropDownWrapperMUI>: null}
			</SearchWrapperMUI>
		
		

			
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
		</SearchContainerWrapperMUI>
	);
};

const {
	SearchContainerMUI,
	TextFieldSearch,
	SearchContainerWrapperMUI,
	EuroPositionMUI,
	DropDownWrapperMUI,
	SearchWrapperMUI,
} = useCategorySearchStyles();


export default React.memo(CategorySearch);
