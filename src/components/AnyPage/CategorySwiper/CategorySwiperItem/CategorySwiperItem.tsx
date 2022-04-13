import React, {FC} from 'react';
import {ICategoryModel} from '@/models/ICategoryModel';
import {
	useCategorySwiperItemStyles
} from '@/components/AnyPage/CategorySwiper/CategorySwiperItem/style';

interface ICategorySearchSwiperItemProps extends ICategoryModel {
	handleClick: (state: string) => () => void;
}


const CategorySwiperItem: FC<ICategorySearchSwiperItemProps> = ({title, handleClick}) => {

	const {ItemMUI, ItemTextMUI} = useCategorySwiperItemStyles();

	return (
		<ItemMUI onClick={handleClick(title)}>
			<ItemTextMUI>
				{title}
			</ItemTextMUI>
		</ItemMUI>
	);
};

export default React.memo(CategorySwiperItem);
