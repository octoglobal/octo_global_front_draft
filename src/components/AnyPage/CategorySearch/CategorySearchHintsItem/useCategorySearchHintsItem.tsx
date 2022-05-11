import {useEffect, useMemo} from 'react';
import {useFormContext} from 'react-hook-form';

export const useCategorySearchHintsItem = (active: boolean, title: string, isMouseEnter: boolean) => {
	const { setValue } = useFormContext();

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

	return {
		activeStyles,
	};
};
