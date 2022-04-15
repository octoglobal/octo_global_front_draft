import React, {useEffect, useMemo, useState} from 'react';
import {useFormContext, useWatch} from 'react-hook-form';
import {ISearchData, SearchSubmitType} from '@/components/Shops/useShopPage';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {fetchHintsSearchShops} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {shopSlice} from '@/reducers/shopsSlice/shopsSlice';


export const useCategorySearch = (onSubmit: (data: ISearchData, type: SearchSubmitType) => void) => {

	const { searchHints } = useAppSelector(state => state.shopReducer);
	const dispatch = useAppDispatch();
	const {control, setValue} = useFormContext();
	const searchValue = useWatch({name: 'search'});
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
	const [isMouseEnter, setIsMouseEnter] = useState(false);


	const isHintsData = useMemo(() => (
		Array.isArray(searchHints) && searchHints.length
	), [searchHints]);

	const isVisibleHints = useMemo(() => (
		!!(isHintsData && isFocus)
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
			onSubmit(
				{
					search: searchValue, tags: []
				},
				'search'
			);
			dispatch(shopSlice.actions.changeHintsShops([]));
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

	const handleClickHintItem = (title: string) => {
		return () => {
			if (title) {
				setActiveSuggestion(0);
				setValue('search', title);
			}
		};
	};

	useEffect(() => {
		if (!activeSuggestion && searchValue) {
			// try {
			// 	octoAxios.get<IHintsResponse>(`/shops?search_suggestions=${searchValue}`).then(response => {
			// 		const hintsResponse = response.data.search_suggestions_results;
			// 		if (hintsResponse) {
			// 			setHintsData(hintsResponse);
			// 			dispatch(shopSlice.actions.changeFoundShops(!hintsResponse.length));
			// 		}
			// 	});
			// } catch (e) {
			// 	console.log(e);
			// }
			dispatch(fetchHintsSearchShops({searchValue}));
		}
		if (!searchValue && searchHints.length) {
			// setHintsData([]);
			setActiveSuggestion(0);
		}
	}, [searchValue]);

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
		handleChangeActiveSuggestion
	};
};
