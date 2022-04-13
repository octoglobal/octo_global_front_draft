import {useEffect, useMemo, useState} from 'react';
import {useFormContext, useWatch} from 'react-hook-form';

export const useCategorySearchHintsItem = (active: boolean, title: string, isMouseEnter: boolean, activeSuggestion: number) => {
	const { setValue } = useFormContext();
	const searchValue = useWatch({name: 'search'});
	const [customHint, setCustomHint] = useState('');

	const activeStyles = useMemo(() => {
		return active ?
			{backgroundColor: '#DFE4EC'} : {};
	}, [active, isMouseEnter]);

	useEffect(() => {
		if (active) {
			if (!isMouseEnter) {
				setValue('search', title);
			}
		}
	}, [active, isMouseEnter]);

	useEffect(() => {
		if (!activeSuggestion) {
			const lowerTitle = title.toLowerCase();
			const lowerSearch = searchValue.toLowerCase();
			const isFindWord = lowerTitle.indexOf(lowerSearch);
			if (isFindWord > -1) {
				let finalWord = '';
				const searchWordArray = lowerSearch.split('');
				for (let i = 0; i < lowerTitle.length; i++) {
					const finWord = searchWordArray.find((item: string) => item === lowerTitle[i]);
					if (finWord) {
						finalWord += `<b>${title[i]}</b>`;
					} else {
						finalWord += title[i];
					}
				}
				setCustomHint(finalWord);
			}
		}
	}, [searchValue]);

	return {
		customHint,
		activeStyles,
	};
};
