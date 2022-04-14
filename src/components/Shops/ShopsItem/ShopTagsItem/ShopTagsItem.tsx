import React, {FC} from 'react';
import {useShopTagsItemStyles} from '@/components/Shops/ShopsItem/ShopTagsItem/style';
import {IHandleClickTagInCard} from '@/components/Shops/type';

interface IShopTagsItemProps {
	tagTitle: string;
	tagId: number;
}

const ShopTagsItem: FC<IShopTagsItemProps & IHandleClickTagInCard> = ({tagTitle, tagId, handleClickTagInCard}) => {
	return (
		<ItemMUI>
			<ItemTextButtonMUI
				// type='submit'
				onClick={handleClickTagInCard(tagTitle, tagId)}
			>
				{tagTitle}
			</ItemTextButtonMUI>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	ItemTextButtonMUI
} = useShopTagsItemStyles();

export default React.memo(ShopTagsItem);
