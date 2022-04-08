import React, {useMemo} from 'react';
import HomeShopsListItem from '@/components/Home/HomeShops/HomeShopsListItem/HomeShopsListItem';
import {shopsData} from '@/components/Home/HomeShops/HomeShopsArray';
import {useHomeShopsListStyles} from '@/components/Home/HomeShops/HomeShopsList/style';


const HomeShopsList = () => {

	const { ListMUI } = useHomeShopsListStyles();

	const isShopsArray = useMemo(() => (
		Array.isArray(shopsData) && shopsData?.length
	), []);

	return (
		<ListMUI>
			{isShopsArray && (
				shopsData.map((shop, index) => (
					<HomeShopsListItem
						key={`${shop.title}${index}`}
						title={shop.title}
						url={shop.url}
						icon={shop.icon}
						style={shop.style}
					/>
				))
			)}
		</ListMUI>
	);
};

export default React.memo(HomeShopsList);
