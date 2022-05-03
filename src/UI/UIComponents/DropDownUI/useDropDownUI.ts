import {useState} from 'react';
import { useMediaQuery } from '@mui/material';

export const useDropDownUI = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const isMobile = useMediaQuery('(max-width: 501px)');

	const handleToggleOpen = () => {
		setIsOpen(prevState => !prevState);
	};

	return {
		isOpen,
		isMobile,
		handleToggleOpen
	};
};
