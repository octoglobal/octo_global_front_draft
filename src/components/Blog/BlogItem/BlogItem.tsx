import React, { FC } from 'react';
import { IBlogModel } from '@/models/IBlogModel';
import { useBlogItemStyles } from '@/components/Blog/BlogItem/style';
import ShopsTagsListArrow from '@/UIIcon/ShopsTagsListArrow.svg';
import BlogProduct from '@/components/Blog/BlogProduct/BlogProduct';
import { useBlogItem } from '@/components/Blog/BlogItem/useBlogItem';
import BlogItemDescription from '@/components/Blog/BlogItemDescription/BlogItemDescription';

import BascetIcon from '../../../UI/UIIcon/Basket.svg';
import EditPencilIcon from '../../../UI/UIIcon/EditPencil.svg';


import { useCustomSize } from '@/hooks/useMedia';

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
					{isCustomSize? null :<BtnSectionMUI>
						<ButtonIconMUI>
							<BascetIcon/>
						</ButtonIconMUI>
						
						<ButtonIconMUI>
							<EditPencilIcon/>
						</ButtonIconMUI>
					</BtnSectionMUI>}
					
				</ProductListMUI>
				{viewDescription && (
					<BtnSectionWrapperMUI>
						<ButtonIconMUI onClick={handleToggleDesc}>
							<ShopsTagsListArrow />
						</ButtonIconMUI>
						{isCustomSize? <BtnSectionMUI>
							<ButtonIconMUI>
								<BascetIcon/>
							</ButtonIconMUI>
						
							<ButtonIconMUI>
								<EditPencilIcon/>
							</ButtonIconMUI>
						</BtnSectionMUI> :null}
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
	BtnSectionMUI,
	BtnSectionWrapperMUI,
} = useBlogItemStyles();

export default React.memo(BlogItem);
