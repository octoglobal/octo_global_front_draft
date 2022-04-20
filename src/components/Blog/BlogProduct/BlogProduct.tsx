import React, { FC, useMemo } from 'react';
import {IBlogModelProducts} from '@/models/IBlogModel';
import {useBlogProductStyles} from '@/components/Blog/BlogProduct/style';
import {HOST} from '@/constants/constants';
import {useMediaQuery} from '@mui/material';

const BlogProduct: FC<IBlogModelProducts & {newPost?: boolean}> = (
	{
		title,
		body,
		url,
		photo,
		newPost
	}
) => {

	const isTablet = useMediaQuery('(max-width: 768px)');
	const photoSrc = useMemo(() => {
		if (newPost) {
			return photo;
		}
		return `${HOST}/image/${photo}`;
	}, [photo]);

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
				href={url}
			>
				{url}
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
