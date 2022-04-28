import {useEffect, useMemo, useState} from 'react';
import {useWatch} from 'react-hook-form';

export const useDropDownCollapseUI = (title: string) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const orderStatus = useWatch({name: 'orderStatus'});

	const modificationTitle = useMemo(() => {
		return orderStatus ? orderStatus.title : title;
	}, [orderStatus, title]);

	const activeArrowStyles = useMemo(() => {
		if (isOpen) {
			return {
				transform: 'rotate(180deg)',
			};
		}
		return  {};
	}, [isOpen]);

	const handleToggleOpen = () => {
		setIsOpen(prevState => !prevState);
	};

	useEffect(() => {
		if (orderStatus?.title) {
			setIsOpen(false);
		}
	}, [orderStatus]);

	return {
		isOpen,
		handleToggleOpen,
		modificationTitle,
		activeArrowStyles,

	};
};
