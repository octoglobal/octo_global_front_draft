import React, { FC } from 'react';
import {IBlogModelProducts} from '@/models/IBlogModel';
import {useBlogProductStyles} from '@/components/Blog/BlogProduct/style';
import {useBlogProduct} from '@/components/Blog/BlogProduct/useBlogProduct';

const BlogProduct: FC<IBlogModelProducts & {newPost?: boolean}> = (
	{
		title,
		body,
		url,
		photo,
		newPost
	}
) => {

	const {
		isTablet,
		productLink,
		photoSrc,
	} = useBlogProduct(!!newPost, photo, url);

	return (
		<ItemMUI>
			<PhotoMUI
				src={photoSrc}
				alt={title}
			/>
			{!isTablet && (
				<TitleMUI>
					{title}
				</TitleMUI>
			)}
			{!isTablet && (
				<DescriptionMUI>
					{body}
				</DescriptionMUI>
			)}
			<LinkMUI
				target='_blank'
				rel='noreferrer'
				href={productLink.hrefLink}
			>
				{productLink.nameLink}
			</LinkMUI>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	PhotoMUI,
	TitleMUI,
	DescriptionMUI,
	LinkMUI
} = useBlogProductStyles();

export default React.memo(BlogProduct);
