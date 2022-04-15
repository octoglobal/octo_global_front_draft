import {ICategoryItem} from '@/components/Shops/type';
import {useMemo, useState} from 'react';

export const useCategoryList = (allTags: ICategoryItem[]) => {
	const [isOpenList, setIsOpenList] = useState(false);

	const handleChangeOpenList = (state: boolean) => {
		setIsOpenList(state);
	};

	const isAllTagArray = useMemo(() => (
		Array.isArray(allTags) && allTags.length
	), [allTags]);

	return {
		isOpenList,
		isAllTagArray,
		handleChangeOpenList
	};
};
