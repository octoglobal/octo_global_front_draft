import React, {FC} from 'react';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {useCategorySearchHintsItemStyles} from '@/components/AnyPage/CategorySearch/CategorySearchHintsItem/style';

interface ICategorySearchHintsItemProps extends IHints {
	active: boolean
}

const CategorySearchHintsItem: FC<ICategorySearchHintsItemProps> = ({title, active}) => {
	return (
		<ItemMUI>
			<ItemTextMUI>
				{title}
			</ItemTextMUI>
		</ItemMUI>
	);
};

const { ItemMUI, ItemTextMUI } = useCategorySearchHintsItemStyles();

export default React.memo(CategorySearchHintsItem);
