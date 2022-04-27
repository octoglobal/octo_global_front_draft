import React, { FC } from 'react';
import { IBlogModel } from '@/models/IBlogModel';
import { useBlogItemStyles } from '@/components/Blog/BlogItem/style';
import ShopsTagsListArrow from '@/UIIcon/ShopsTagsListArrow.svg';
import BlogProduct from '@/components/Blog/BlogProduct/BlogProduct';
import { useBlogItem } from '@/components/Blog/BlogItem/useBlogItem';
import BlogItemDescription from '@/components/Blog/BlogItemDescription/BlogItemDescription';


import { useCustomSize } from '@/hooks/useMedia';
import BtnSection from './BtnSection/BtnSection';

interface IBlogItemProps extends IBlogModel {
	viewDescription?: boolean;
	isTitleSplice?: boolean;
}

const BlogItem: FC<IBlogItemProps> = (
	{
		title,
		products,
		body,
		newPost,
		viewDescription = true,
		isTitleSplice = false,
		id,
	},
) => {
	
	const {
		isOpenDesc,
		modifiedTitle,
		dopItemStyle,
		handleToggleDesc,
	} = useBlogItem(
		title,
		viewDescription,
		isTitleSplice,
	);	
	const { isCustomSize } = useCustomSize(1025);
	return (
		<ItemMUI sx={dopItemStyle.item}>
			<WrapperMUI>
				<ItemTitleMUI sx={dopItemStyle.title}>
					{modifiedTitle}
				</ItemTitleMUI>
				<ProductListMUI>
					{products.map((product, index) => (
						<BlogProduct
							newPost={newPost}
							key={`${product.title}${product.url}${index}`}
							{...product}
						/>
						
					))}
					
					{isCustomSize? null :<BtnSection id={id}></BtnSection>}
					
				</ProductListMUI>
				{viewDescription && (
					<BtnSectionWrapperMUI>
						<ButtonIconMUI onClick={handleToggleDesc}>
							<ShopsTagsListArrow />
						</ButtonIconMUI>
						{isCustomSize? <BtnSection id={id}/> :null}
						<CollapseDescMUI in={isOpenDesc}>
							<BlogItemDescription
								description={body}
							/>
						</CollapseDescMUI>
					</BtnSectionWrapperMUI>
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
	BtnSectionWrapperMUI,
} = useBlogItemStyles();

export default React.memo(BlogItem);
