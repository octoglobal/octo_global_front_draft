import React, {useEffect, useMemo, useState} from 'react';
import {useFormContext, useWatch} from 'react-hook-form';
import {ISearchData, SearchSubmitType} from '@/components/Shops/useShopPage';
import { IHints } from '@/components/AnyPage/CategorySearch/types';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';
import { useUserStore } from '@/hooks/useUserStore';

import { useMobile } from '@/hooks/useMedia';
import { useRouter } from 'next/router';

export const useCategorySearch = (
	onSubmit: (data: ISearchData | {suggestionIndex: number}, type?: SearchSubmitType) => void,
	searchHints: IHints[] | IAdminHintsData[],
	handleKeyDownEnter: () => void,
	handleChangeSearchValue: (value: string) => void,
	component: 'account' | 'shops' = 'shops',
) => {

	const {control, setValue} = useFormContext();
	const searchValue = useWatch({name: 'search'});
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
	const [isMouseEnter, setIsMouseEnter] = useState(false);
	const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

	const router = useRouter();
	const dropItems = [
		{title: 'Сформировать отчёт', onClick: () => console.log('Сформировать отчёт')},
		{title: 'Все ожидаемые товары', onClick: ()=>router.push('/account/orders/all-wait')},
		
	];
	const {
		isMobile
	} = useMobile();
	
	const {		
		isAdmin,
	} = useUserStore();

	
	
	

	const isAccount = useMemo(() => (
		useRouter().pathname?.split('/')[1] === 'account'
	), [useRouter]);
	


	const isHintsData = useMemo(() => (
		Array.isArray(searchHints) && searchHints?.length

	), [searchHints]);

	const isVisibleHints = useMemo(() => (
		!!(isHintsData && isFocus && searchValue)
	), [isFocus, isHintsData]);


	const handleChangeFocus = (state: boolean) => {
		return () => {
			if (!state) {
				setTimeout(function() {					
					setIsFocus(state);
				}.bind(this), 150);
				return;
			}
			setIsFocus(state);
		};
	};


	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		setIsMouseEnter(false);
		if (e.key === 'ArrowDown') {
			if (activeSuggestion + 1 > searchHints.length) {
				setActiveSuggestion(1);
				return;
			}
			setActiveSuggestion(prevState => prevState + 1);
			return;
		}
		if (e.key === 'ArrowUp') {
			if (activeSuggestion - 1 < 1) {
				setActiveSuggestion(searchHints.length);
				return;
			}
			setActiveSuggestion(prevState => prevState - 1);
			return;
		}
		if (e.key === 'Enter') {
			e.preventDefault();
			//?
			if (component == 'shops') {
				onSubmit(
					{
						search: searchValue, tags: []
					},
					'search'
				);
			} else {
				onSubmit(
					{
						suggestionIndex: activeSuggestion
					},
				);
			}
			handleKeyDownEnter();
		}
		setActiveSuggestion(0);
	};

	const handleChangeActiveSuggestion = (hintCount: number) => {
		return () => {
			setIsMouseEnter(true);
			setActiveSuggestion(hintCount);
		};
	};

	const handleMouseEnter = () => {
		setIsMouseEnter(true);
	};

	const handleMouseLeave = () => {
		setIsMouseEnter(false);
		handleChangeActiveSuggestion(0)();
	};

	const handleClickHintItem = (title: string, hints: IHints & IAdminHintsData) => {
		return () => {
		
			if (title && !hints?.email) {
				setValue('search', title);
			}
			if (hints?.email) {
				setValue('search', `${hints.email}`);
				onSubmit(
					{
						suggestionIndex: activeSuggestion
					},
				);
			}
			setActiveSuggestion(0);
		};
	};

	useEffect(() => {
		if (!activeSuggestion && searchValue) {
			handleChangeSearchValue(searchValue);
		}
		if (!searchValue && searchHints?.length) {
			setActiveSuggestion(0);
		}

		
		if (!searchValue){		
			
			handleKeyDownEnter();
		}
	}, [searchValue]);
	const ButtonSxStyle = {
		backgroundColor: 'rgba(39, 77, 130, 0.8)',
		 width: '90%',
		margin: 0
	};
	return {
		isFocus,
		control,
		searchHints,
		isMouseEnter,
		handleKeyDown,
		isVisibleHints,
		activeSuggestion,
		handleMouseEnter,
		handleMouseLeave,
		handleChangeFocus,
		setActiveSuggestion,
		handleClickHintItem,
		handleChangeActiveSuggestion,
		isAdmin,
		isMobile,
		isAccount,
		dropItems,
		dropDownOpen,
		setDropDownOpen,
		ButtonSxStyle,
	};
};
