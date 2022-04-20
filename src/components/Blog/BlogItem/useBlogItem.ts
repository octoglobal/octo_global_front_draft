import {useState} from 'react';

export const useBlogItem = () => {

	const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

	const handleToggleDesc = () => {
		setIsOpenDesc(prevState => !prevState);
	};

	return {
		isOpenDesc,
		handleToggleDesc
	};
};
