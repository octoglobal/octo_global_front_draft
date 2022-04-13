import React, {FC} from 'react';
import CategorySwiperActiveItem
	from '@/components/AnyPage/CategorySwiper/CategorySwiperActiveItem/CategorySwiperActiveItem';
import {usCategorySwiperActiveStyle} from '@/components/AnyPage/CategorySwiper/CategorySwiperActive/style';

interface ICategorySearchSwiperActiveProps {
	category: string[],
	handleDeleteCategory: (category: string) => () => void;
}

const CategorySwiperActive: FC<ICategorySearchSwiperActiveProps> = ({category, handleDeleteCategory}) => {

	const { ListMUI } = usCategorySwiperActiveStyle();


	return (
		<ListMUI>
			{category.map(categories => (
				<CategorySwiperActiveItem
					key={categories}
					title={categories}
					handleDeleteCategory={handleDeleteCategory}
				/>
			))}
		</ListMUI>
	);
};

export default React.memo(CategorySwiperActive);
