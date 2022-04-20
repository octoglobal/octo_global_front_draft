import React, {FC} from 'react';
import {IBlogModelProducts} from '@/models/IBlogModel';
import {useBlogProductStyles} from '@/components/Blog/BlogProduct/style';
import {HOST} from '@/constants/constants';
import {useMediaQuery} from '@mui/material';

const BlogProduct: FC<IBlogModelProducts> = ({title, body, url, photo}) => {

	const isTablet = useMediaQuery('(max-width: 768px)');

	return (
		<ItemMUI>
			<PhotoMUI
				src={`${HOST}/image/${photo}`}
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
