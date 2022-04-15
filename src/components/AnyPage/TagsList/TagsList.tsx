import React, {FC} from 'react';
import {ICategoryItem, IHandleClickTagInCard} from '@/components/Shops/type';
import {useTagsList} from '@/components/AnyPage/TagsList/useTagsList';
import {useTagsListStyles} from '@/components/AnyPage/TagsList/style';
import ShopsTagsListArrow from '@/UIIcon/ShopsTagsListArrow.svg';
import TagsListItem from '@/components/AnyPage/TagsList/TagsListItem/TagsListItem';

interface ICategoryListProps extends IHandleClickTagInCard {
	allTags: ICategoryItem[],
}

const TagsList: FC<ICategoryListProps> = ({allTags, handleClickTagInCard}) => {

	const {
		isOpenList,
		isAllTagArray,
		handleChangeOpenList,
	} = useTagsList(allTags);

	return (
		<>
			<ContainerMUI>
				<ArrowContainerMUI onClick={handleChangeOpenList(true)}>
					<ShopsTagsListArrow/>
				</ArrowContainerMUI>
				<CollapseMUI
					in={isOpenList}
					timeout={300}
				>
					<ListMUI>
						{isAllTagArray && (
							allTags.map((tag, index) => (
								<TagsListItem
									key={`${tag.id}${index}${tag.title}`}
									handleClickTagInCard={handleClickTagInCard}
									{...tag}
								/>
							))
						)}
					</ListMUI>
				</CollapseMUI>
			</ContainerMUI>
			<ModalMUI
				open={isOpenList}
				onClick={handleChangeOpenList(false)}
			/>
		</>
	);
};

const {
	ListMUI,
	ModalMUI,
	CollapseMUI,
	ContainerMUI,
	ArrowContainerMUI,
} = useTagsListStyles();

export default React.memo(TagsList);
