import { useEffect, useState } from 'react';
import {useFormContext} from 'react-hook-form';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const useAdminBottomMenu = () => {
	const {
		reset
	} = useFormContext();

	const {
		getData,
		setData
	} = useLocalStorage();

	const [isChecked, setIsChecked] = useState<boolean>(true);
	const [isHideText, setIsHideText] = useState<boolean>(false);

	const handleToggleChecked = () => {
		if (isChecked) {
			setIsChecked(false);
			reset({});
		} else {
			setIsChecked(true);
		}
	};

	useEffect(() => {
		if (typeof window !== undefined) {
			if (getData('hideAccountSuggestion')) {
				setIsHideText(true);
			}
		}
	}, []);

	const handleClickText = () => {
		setIsHideText(true);
		setData('hideAccountSuggestion', true);
	};



	return {
		isChecked,
		isHideText,
		handleClickText,
		handleToggleChecked,
	};
};
