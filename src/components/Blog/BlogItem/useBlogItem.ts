import {useMemo, useState} from 'react';

export const useBlogItem = (viewDescription?: boolean) => {

	const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

	const handleToggleDesc = () => {
		setIsOpenDesc(prevState => !prevState);
	};

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
		handleToggleDesc
	};
};
