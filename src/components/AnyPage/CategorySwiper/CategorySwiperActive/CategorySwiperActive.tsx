import React, {FC} from 'react';
import CategorySwiperActiveItem
	from '@/components/AnyPage/CategorySwiper/CategorySwiperActiveItem/CategorySwiperActiveItem';
import {usCategorySwiperActiveStyle} from '@/components/AnyPage/CategorySwiper/CategorySwiperActive/style';
import {ICategoryItem} from '@/components/Shops/type';

interface ICategorySearchSwiperActiveProps {
	category: ICategoryItem[],
	handleDeleteCategory: (category: ICategoryItem) => () => void;
}

const CategorySwiperActive: FC<ICategorySearchSwiperActiveProps> = ({category, handleDeleteCategory}) => {

	const {
		ListMUI,
		EmptyListMUI
	} = usCategorySwiperActiveStyle();


	return (
		<ListMUI>
			{category?.length ? (
				category.map(categories => (
					<CategorySwiperActiveItem
						key={categories.id}
						id={categories.id}
						title={categories.title}
						handleDeleteCategory={handleDeleteCategory}
					/>
				))
			) : <EmptyListMUI/>}
		</ListMUI>
	);
};

export default React.memo(CategorySwiperActive);
