import {useEffect, useState} from 'react';
import { useMediaQuery } from '@mui/material';

export const useDropDownUI = (externalOpen: boolean | undefined, setExternalOpen: ((state: false) => void) | undefined) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isMobile = useMediaQuery('(max-width: 501px)');

	const handleToggleOpen = () => {
		setIsOpen(prevState => !prevState);
		if (externalOpen && setExternalOpen) {
			setExternalOpen(false);
		}
	};

	useEffect(() => {
		if (externalOpen === undefined) return;
		if (externalOpen) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [externalOpen]);

	return {
		isOpen,
		isMobile,
		handleToggleOpen
	};
};
