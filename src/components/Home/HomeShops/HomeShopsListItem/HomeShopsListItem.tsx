import React, {FC, useMemo} from 'react';
import {IShopsData} from '@/components/Home/HomeShops/HomeShopsList/type';
import {useHomeShopsListItemStyles} from '@/components/Home/HomeShops/HomeShopsListItem/style';

const HomeShopsListItem: FC<IShopsData> = ({
	title,
	style,
	icon,
	url
}) => {

	const {ItemMUI, LinkMUI, ContainerItemMUI} = useHomeShopsListItemStyles();
	const Icon = useMemo(() => icon, [icon]);
	const iconStyles = useMemo(() => style ? style : {}, [style]);

	return (
		<>
			{Icon ? (
				<ContainerItemMUI
					className={`hoverIcon ${title}`}
					sx={{...iconStyles}}
				>
					<ItemMUI>
						<LinkMUI
							title={title}
							href={url}
							target="_blank"
							rel="noreferrer"
						>
							<Icon/>
						</LinkMUI>
					</ItemMUI>
				</ContainerItemMUI>
			) : null}
		</>
	);
};

export default React.memo(HomeShopsListItem);
