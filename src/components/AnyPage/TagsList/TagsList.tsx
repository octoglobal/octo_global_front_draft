import React, {FC} from 'react';
import {ICategoryItem} from '@/components/Shops/type';
import {useCategoryList} from '@/components/AnyPage/CategoryList/useCategoryList';
import {useCategoryListStyles} from '@/components/AnyPage/CategoryList/style';

interface ICategoryListProps {
	allTags: ICategoryItem[],
}

const CategoryList: FC<ICategoryListProps> = ({allTags}) => {

	const {
		isOpenList,
		isAllTagArray,
		handleChangeOpenList,
	} = useCategoryList(allTags);

	return (
		<>
			<CollapseMUI in={isOpenList}>
				23
			</CollapseMUI>
			<ModalMUI open={isOpenList}>
				test
			</ModalMUI>
		</>
	);
};

const {
	ListMUI,
	ModalMUI,
	CollapseMUI,
	ContainerMUI
} = useCategoryListStyles();

export default React.memo(CategoryList);
