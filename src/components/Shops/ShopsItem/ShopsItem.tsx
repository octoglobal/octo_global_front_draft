import React, {FC, useMemo} from 'react';
import {IShopsModel} from '@/models/IShopsModel';
import {useShopsItemStyles} from '@/components/Shops/ShopsItem/style';
import {HOST} from '@/constants/constants';
import ShopTags from '@/components/Shops/ShopsItem/ShopTags/ShopTags';
import {IHandleClickTagInCard} from '@/components/Shops/type';


const ShopsItem: FC<IShopsModel & IHandleClickTagInCard> = (
	{
		title,
		id,
		url,
		photo,
		tags,
		handleClickTagInCard
	}
) => {

	const photoAttributes = useMemo(() => (
		{
			src: `${HOST}/image/${photo}`,
			alt: `${title}-${id}/image`
		}
	), [photo]);

	return (
		<ItemMUI>
			<LinkMUI
				href={url}
				title={title}
				target="_blank"
				rel="noreferrer"
			>
				<PhotoMUI {...photoAttributes}/>
				<TitleMUI>
					{title}
				</TitleMUI>
			</LinkMUI>
			<TextWrapperMUI>
				<ShopTags
					tags={tags}
					handleClickTagInCard={handleClickTagInCard}
				/>
			</TextWrapperMUI>
		</ItemMUI>
	);
};

const {
	LinkMUI,
	ItemMUI,
	PhotoMUI,
	TitleMUI,
	TextWrapperMUI,
} = useShopsItemStyles();

export default React.memo(ShopsItem);
