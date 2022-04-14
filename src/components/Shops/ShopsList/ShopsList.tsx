import React, {FC} from 'react';
import {useShopsList} from '@/components/Shops/ShopsList/useShopsList';
import ShopsItem from '@/components/Shops/ShopsItem/ShopsItem';
import {useShopListStyles} from '@/components/Shops/ShopsList/style';
import {IHandleClickTagInCard} from '@/components/Shops/type';

const ShopsList: FC<IHandleClickTagInCard> = ({handleClickTagInCard}) => {
	const { shops, isShopsArray } = useShopsList();

	return (
		<ListMUI>
			{isShopsArray ? (
				shops.map((shop, index) => (
					<ShopsItem
						key={`${shop.url}${shop.title}${index}`}
						handleClickTagInCard={handleClickTagInCard}
						{...shop}
					/>
				))
			) : null}
		</ListMUI>
	);
};

const {
	ListMUI
} = useShopListStyles();

export default React.memo(ShopsList);
