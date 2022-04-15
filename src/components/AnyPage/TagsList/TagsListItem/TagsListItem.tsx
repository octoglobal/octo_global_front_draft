import React, {FC} from 'react';
import {ICategoryItem, IHandleClickTagInCard} from '@/components/Shops/type';
import {useTagListItemStyles} from '@/components/AnyPage/TagsList/TagsListItem/style';

const TagsListItem: FC<ICategoryItem & IHandleClickTagInCard> = ({title, id, handleClickTagInCard}) => {
	return (
		<ItemMUI>
			<ItemButton onClick={handleClickTagInCard(title, id, 'tagInList')}>
				<ItemTextMUI>
					{title}
				</ItemTextMUI>
			</ItemButton>
		</ItemMUI>
	);
};

const {
	ItemMUI,
	ItemTextMUI,
	ItemButton,
} = useTagListItemStyles();

export default React.memo(TagsListItem);
