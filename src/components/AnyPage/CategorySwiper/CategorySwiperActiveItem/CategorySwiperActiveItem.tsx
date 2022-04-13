import React, {FC} from 'react';
import {useCategorySwiperActiveItemStyles} from '@/components/AnyPage/CategorySwiper/CategorySwiperActiveItem/style';
import CrossIcon from '@/UIIcon/CrossIcon.svg';
import {ICategoryItem} from '@/components/Shops/type';

interface ICategorySwiperActiveItemProps {
	id: number;
	title: string;
	handleDeleteCategory: (category: ICategoryItem) => () => void;
}

const CategorySwiperActiveItem: FC<ICategorySwiperActiveItemProps> = ({title, id, handleDeleteCategory}) => {
	return (
		<ItemMUI>
			<ItemTitleMUI>
				{title}
			</ItemTitleMUI>
			<ItemDeleteMUI
				type='submit'
				onClick={handleDeleteCategory({title, id})}
			>
				<CrossIcon/>
			</ItemDeleteMUI>
		</ItemMUI>
	);
};

const { ItemMUI, ItemTitleMUI, ItemDeleteMUI } = useCategorySwiperActiveItemStyles();


export default React.memo(CategorySwiperActiveItem);
