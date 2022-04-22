import React, {FC} from 'react';
import {IBlogModel} from '@/models/IBlogModel';
import {useBlogItemStyles} from '@/components/Blog/BlogItem/style';
import ShopsTagsListArrow from '@/UIIcon/ShopsTagsListArrow.svg';
import BlogProduct from '@/components/Blog/BlogProduct/BlogProduct';
import {useBlogItem} from '@/components/Blog/BlogItem/useBlogItem';
import BlogItemDescription from '@/components/Blog/BlogItemDescription/BlogItemDescription';

interface IBlogItemProps extends IBlogModel{
	viewDescription?: boolean;
}

const BlogItem: FC<IBlogItemProps> = (
	{
		title,
		products,
		body,
		newPost,
		viewDescription = true,
	}
) => {

	const {
		isOpenDesc,
		dopItemStyle,
		handleToggleDesc
	} = useBlogItem(viewDescription);

	return (
		<ItemMUI sx={dopItemStyle.item}>
			<WrapperMUI>
				<ItemTitleMUI sx={dopItemStyle.title}>
					{title}
				</ItemTitleMUI>
				<ProductListMUI>
					{products.map((product, index) => (
						<BlogProduct
							newPost={newPost}
							key={`${product.title}${product.url}${index}`}
							{...product}
						/>
					))}
				</ProductListMUI>
				{viewDescription && (
					<>
						<ButtonIconMUI onClick={handleToggleDesc}>
							<ShopsTagsListArrow/>
						</ButtonIconMUI>
						<CollapseDescMUI in={isOpenDesc}>
							<BlogItemDescription
								description={body}
							/>
						</CollapseDescMUI>
					</>
				)}
			</WrapperMUI>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	WrapperMUI,
	ItemTitleMUI,
	ButtonIconMUI,
	ProductListMUI,
	CollapseDescMUI,
} = useBlogItemStyles();

export default React.memo(BlogItem);
