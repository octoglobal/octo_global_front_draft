import React, {FC, useMemo} from 'react';
import {IShopsModelTags} from '@/models/IShopsModel';
import {useShopTagsStyles} from '@/components/Shops/ShopsItem/ShopTags/style';
import ShopTagsItem from '@/components/Shops/ShopsItem/ShopTagsItem/ShopTagsItem';
import {IHandleClickTagInCard} from '@/components/Shops/type';

interface IShopTagsProps {
	tags: IShopsModelTags[]
}

const ShopTags: FC<IShopTagsProps & IHandleClickTagInCard> = (
	{
		tags,
		handleClickTagInCard
	}
) => {

	const isTagsArray = useMemo(() => (
		Array.isArray(tags) && tags.length
	), [tags]);

	return (
		<ListMUI>
			{isTagsArray && (
				tags.map(tag => (
					<ShopTagsItem
						key={tag.shop_tag_id}
						tagTitle={tag.shop_tag_title}
						tagId={tag.shop_tag_id}
						handleClickTagInCard={handleClickTagInCard}
					/>
				))
			)}
		</ListMUI>
	);
};

const { ListMUI } = useShopTagsStyles();

export default React.memo(ShopTags);
