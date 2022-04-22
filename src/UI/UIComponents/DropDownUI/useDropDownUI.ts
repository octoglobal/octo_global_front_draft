import {useState} from 'react';

export const useDropDownUI = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggleOpen = () => {
		setIsOpen(prevState => !prevState);
	};

	return {
		isOpen,
		handleToggleOpen
	};
};
