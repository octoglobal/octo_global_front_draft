import React, {FC, useMemo} from 'react';
import {IShopsData} from '@/components/Home/HomeShops/HomeShopsList/type';
import {useHomeShopSwiperItem} from '@/components/Home/HomeShops/HomeShopSwiperItem/style';

const HomeShopSwiperItem: FC<IShopsData> = ({icon, title, url,  }) => {

	const { LinkMUI } = useHomeShopSwiperItem();
	const Icon = useMemo(() => icon, [icon]);

	return (
		<>
			{Icon ? (
				<LinkMUI
					title={title}
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					<Icon/>
				</LinkMUI>
			) : null}
		</>
	);
};

export default React.memo(HomeShopSwiperItem);
