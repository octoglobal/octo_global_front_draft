import React, {useEffect, useMemo, useState} from 'react';
import {useFormContext, useWatch} from 'react-hook-form';
import {IHints, IHintsResponse} from '@/components/AnyPage/CategorySearch/types';
import {octoAxios} from '@/lib/http';

export const useCategorySearch = () => {

	const {control, setValue} = useFormContext();
	const searchValue = useWatch({name: 'search'});
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [hintsData, setHintsData] = useState<IHints[]>([]);
	const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
	const [isMouseEnter, setIsMouseEnter] = useState(false);


	const isHintsData = useMemo(() => (
		Array.isArray(hintsData) && hintsData.length
	), [hintsData]);

	const isVisibleHints = useMemo(() => (
		isHintsData && isFocus
	), [isFocus, isHintsData]);


	const handleChangeFocus = (state: boolean) => {
		return () => {
			if (!state) {
				setTimeout(function() {
					setIsFocus(state);
				}.bind(this), 100);
				return;
			}
			setIsFocus(state);
		};
	};


	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		setIsMouseEnter(false);
		if (e.key === 'ArrowDown') {
			if (activeSuggestion + 1 > hintsData.length) {
				setActiveSuggestion(1);
				return;
			};
			setActiveSuggestion(prevState => prevState + 1);
			return;
		}
		if (e.key === 'ArrowUp') {
			if (activeSuggestion - 1 < 1) {
				setActiveSuggestion(hintsData.length);
				return;
			};
			setActiveSuggestion(prevState => prevState - 1);
			return;
		}
		if (e.key === 'Enter') {
			console.log(e.key);
			console.log(searchValue);
			// setIsFocus(false);
			return;
		};
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
			try {
				octoAxios.get<IHintsResponse>(`/shops?search_suggestions=${searchValue}`).then(response => {
					const hintsResponse = response.data.search_suggestions_results;
					if (hintsResponse) {
						setHintsData(hintsResponse);
					}
				});
			} catch (e) {
				console.log(e);
			}
		}
		if (!searchValue && hintsData.length) {
			setHintsData([]);
			setActiveSuggestion(0);
		}
	}, [searchValue]);

	return {
		isFocus,
		control,
		hintsData,
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
