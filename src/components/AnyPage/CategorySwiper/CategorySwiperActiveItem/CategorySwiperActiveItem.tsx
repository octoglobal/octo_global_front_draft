import React, {FC} from 'react';
import {useCategorySwiperActiveItemStyles} from '@/components/AnyPage/CategorySwiper/CategorySwiperActiveItem/style';
import CrossIcon from '@/UIIcon/CrossIcon.svg';

interface ICategorySwiperActiveItemProps {
	title: string;
	handleDeleteCategory: (category: string) => () => void;
}

const CategorySwiperActiveItem: FC<ICategorySwiperActiveItemProps> = ({title, handleDeleteCategory}) => {

	const { ItemMUI, ItemTitleMUI, ItemDeleteMUI } = useCategorySwiperActiveItemStyles();

	return (
		<ItemMUI>
			<ItemTitleMUI>
				{title}
			</ItemTitleMUI>
			<ItemDeleteMUI onClick={handleDeleteCategory(title)}>
				<CrossIcon/>
			</ItemDeleteMUI>
		</ItemMUI>
	);
};


export default React.memo(CategorySwiperActiveItem);
