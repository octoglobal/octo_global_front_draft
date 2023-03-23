import React, {FC, useMemo, useState} from 'react';
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
 	const [img, setImg] = useState(false);
	const photoAttributes = useMemo(() => (
		{
			src: `${HOST}/image/${photo}`,
			alt: `${title}-${id}/image`
		}
	), [photo]);


	const handleImageLoaded  = ()=>{
		setImg(true);
	};


	return (
		<ItemMUI>

			<LinkMUI
				href={url}
				title={title}
				target="_blank"
				rel="noreferrer"
			>
				<PhotoContainerMUI>
					{!img && <ImagePlaceholderMUI/> }
					<PhotoMUI {...photoAttributes} onLoad={handleImageLoaded}/>
				</PhotoContainerMUI>
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
	PhotoContainerMUI,
	ImagePlaceholderMUI
} = useShopsItemStyles();

export default React.memo(ShopsItem);
