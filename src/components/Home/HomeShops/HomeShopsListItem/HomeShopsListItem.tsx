import React, {FC, useMemo} from 'react';
import {IShopsData} from '@/components/Home/HomeShops/HomeShopsList/type';
// import {Link} from '@mui/material';
import {useHomeShopsListItemStyles} from '@/components/Home/HomeShops/HomeShopsListItem/style';

// interface IHomeShopsListItemProps {
//
// };


const HomeShopsListItem: FC<IShopsData> = ({
	title,
	style,
	icon,
	url
}) => {

	const {ItemMUI, LinkMUI} = useHomeShopsListItemStyles();
	const Icon = useMemo(() => icon, [icon]);
	const iconStyles = useMemo(() => style ? style : {}, [style]);

	return (
		<>
			{Icon ? (
				<LinkMUI
					className="hoverIcon"
					title={title}
					href={url}
					target="_blank"
					rel="noreferrer"
					sx={iconStyles}
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
