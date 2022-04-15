import React, {FC} from 'react';
import {ICategoryModel} from '@/models/ICategoryModel';
import {
	useCategorySwiperItemStyles
} from '@/components/AnyPage/CategorySwiper/CategorySwiperItem/style';
import {ISwiperCategoryItemClick2} from '@/components/Shops/type';


const CategorySwiperItem: FC<ISwiperCategoryItemClick2 & ICategoryModel> = ({title, id, handleClick}) => {


	return (
		<ItemMUI
			type='submit'
			onClick={() => handleClick({title, id})}
		>
			<ItemTextMUI>
				{title}
			</ItemTextMUI>
		</ItemMUI>
	);
};

const {ItemMUI, ItemTextMUI} = useCategorySwiperItemStyles();


export default React.memo(CategorySwiperItem);
