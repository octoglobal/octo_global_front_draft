import React, {FC} from 'react';
import {IBlogModel} from '@/models/IBlogModel';
import {useBlogItemStyles} from '@/components/Blog/BlogItem/style';
import ShopsTagsListArrow from '@/UIIcon/ShopsTagsListArrow.svg';
import BlogProduct from '@/components/Blog/BlogProduct/BlogProduct';
import {useBlogItem} from '@/components/Blog/BlogItem/useBlogItem';
import BlogItemDescription from '@/components/Blog/BlogItemDescription/BlogItemDescription';

const BlogItem: FC<IBlogModel> = ({title, products, body}) => {

	const {
		isOpenDesc,
		handleToggleDesc
	} = useBlogItem();

	return (
		<ItemMUI>
			<WrapperMUI>
				<ItemTitleMUI>
					{title}
				</ItemTitleMUI>
				<ProductListMUI>
					{products.map((product, index) => (
						<BlogProduct
							key={`${product.title}${product.url}${index}`}
							{...product}
						/>
					))}
				</ProductListMUI>
				<ButtonIconMUI onClick={handleToggleDesc}>
					<ShopsTagsListArrow/>
				</ButtonIconMUI>
				<CollapseDescMUI in={isOpenDesc}>
					<BlogItemDescription
						description={body}
					/>
				</CollapseDescMUI>
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
