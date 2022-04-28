import {useMemo, useState} from 'react';

export const useBlogItem = (title: string, viewDescription?: boolean, isTitleSplice?: boolean) => {

	const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);

	const handleToggleDesc = () => {
		setIsOpenDesc(prevState => !prevState);
	};
	
	const reduceString = (text:string, limit:number):string => {
		text = text.trim();
		if( text.length <= limit) return text;

		text = text.slice( 0, limit);
		const lastSpace = text.lastIndexOf(' ');

		if( lastSpace > 0) {
			text = text.substring(0, lastSpace);
		}
		return text + '...';
	};
	// const windowInnerWidth = window.innerWidth
	
	const modifiedTitle = useMemo(() => {
		if (isTitleSplice) {
			// Вот тут менять!!!!
			// return title;
			return reduceString(title,10);
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
