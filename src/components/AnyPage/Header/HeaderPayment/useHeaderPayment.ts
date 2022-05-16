import {useState} from 'react';

export const useHeaderPayment = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleToggleMenuOpen = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	return {
		isMenuOpen,
		handleToggleMenuOpen
	};
};
