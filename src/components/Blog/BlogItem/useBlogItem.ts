import {useMemo, useState} from 'react';

export const useBlogItem = (title: string, viewDescription?: boolean, isTitleSplice?: boolean) => {

	const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

	const handleToggleDesc = () => {
		setIsOpenDesc(prevState => !prevState);
	};

	const modifiedTitle = useMemo(() => {
		if (isTitleSplice) {
			// Вот тут менять!!!!
			return title;
		}
		return title;
	}, [isTitleSplice]);

	const dopItemStyle = useMemo(() => {
		if (viewDescription) {
			return {
				item: {},
				title: {}
			};
		}
		return {
			item: {
				borderBottom: 0
			},
			title: {
				marginBottom: '31px',
				textAlign: 'center',
			}
		};
	}, [viewDescription]);

	return {
		isOpenDesc,
		dopItemStyle,
		modifiedTitle,
		handleToggleDesc
	};
};
