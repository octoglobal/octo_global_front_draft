import React, { FC, useMemo } from 'react';
import CategorySwiperActiveItem
	from '@/components/AnyPage/CategorySwiper/CategorySwiperActiveItem/CategorySwiperActiveItem';
import {usCategorySwiperActiveStyle} from '@/components/AnyPage/CategorySwiper/CategorySwiperActive/style';
import {ICategoryItem} from '@/components/Shops/type';
import { useCategorySwiperActiveItemStyles } from '@/components/AnyPage/CategorySwiper/CategorySwiperActiveItem/style';
import { useWatch } from 'react-hook-form';

interface ICategorySearchSwiperActiveProps {
	category: ICategoryItem[],
	handleDeleteCategory: (category: ICategoryItem) => () => void;
	handleResetCategory:  () => void;
}

const CategorySwiperActive: FC<ICategorySearchSwiperActiveProps> = ({
	category,
	handleDeleteCategory,
	handleResetCategory
}) => {
	const search = useWatch({name: 'search'});


	const isCategoryLength = useMemo(() => (
		!!(category?.length && Array.isArray(category))
	), [category]);

	const isClear = useMemo(() => (
		!!(isCategoryLength || search?.length)
	), [isCategoryLength, search]);

	return (
		<ContainerMUI>
			<ListMUI>
				{isCategoryLength ? (
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
			{isClear && (
				<ClearTagButtonMUI
					type='submit'
					onClick={handleResetCategory}
				>
					<ItemTitleMUI>
						Очистить теги
					</ItemTitleMUI>
				</ClearTagButtonMUI>
			)}
		</ContainerMUI>
	);
};

const {
	ListMUI,
	EmptyListMUI,
	ContainerMUI,
	ClearTagButtonMUI
} = usCategorySwiperActiveStyle();

const {
	ItemTitleMUI,
} = useCategorySwiperActiveItemStyles();

export default React.memo(CategorySwiperActive);
