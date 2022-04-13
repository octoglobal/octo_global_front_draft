import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';

export const useCategorySearch = () => {
	const [activeSuggestion, setActiveSuggestion] = useState<number>(0);
	const [isFocus, setIsFocus] = useState<boolean>(false);
	const {control} = useFormContext();

	const handleChangeFocus = (state: boolean) => {
		return () => {
			setIsFocus(state);
		};
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		console.log(e.key);
		if (e.key === 'ArrowDown') {
			if (activeSuggestion + 1 > 3) {
				setActiveSuggestion(1);
			};
			setActiveSuggestion(prevState => prevState + 1);
		}
		if (e.key === 'ArrowUp') {
			if (activeSuggestion - 1 < 1) {
				setActiveSuggestion(3);
			};
			setActiveSuggestion(prevState => prevState - 1);
		}
	};

	return {
		isFocus,
		control,
		handleKeyDown,
		activeSuggestion,
		handleChangeFocus,
	};
};
