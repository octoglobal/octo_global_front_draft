import React, {FC, useMemo} from 'react';
import {IShopsData} from '@/components/Home/HomeShops/HomeShopsList/type';
// import {Link} from '@mui/material';
import {useHomeShopsListItemStyles} from '@/components/Home/HomeShops/HomeShopsListItem/style';

const HomeShopsListItem: FC<IShopsData> = ({
	title,
	style,
	icon,
	url
}) => {

	const {ItemMUI, LinkMUI} = useHomeShopsListItemStyles();
	const Icon = useMemo(() => icon, [icon]);
	const iconStyles = useMemo(() => style ? style : {}, [style]);

	// const stylesWidth = useMemo(() => {
	// 	if (style?.width) {
	// 		const widthElement = iconStyles.width?.replace('px', '');
	// 		if (typeof widthElement == 'string') {
	// 			return {
	// 				width: `${+widthElement - (+widthElement > 100 ? -100: -200)}px`
	// 			};
	// 		}
	// 	}
	// 	return {};
	// }, [style]);
	//
	// console.log(stylesWidth);

	return (
		<>
			{Icon ? (
				<LinkMUI
					className={`hoverIcon ${title}`}
					title={title}
					href={url}
					target="_blank"
					rel="noreferrer"
					sx={{...iconStyles}}
				>
					<ItemMUI>
						<Icon/>
					</ItemMUI>
				</LinkMUI>
			) : null}
		</>
	);
};

export default React.memo(HomeShopsListItem);
