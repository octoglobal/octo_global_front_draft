
export interface ICategoryItem {
	title: string;
	id: number;
}

export interface ISwiperCategoryItemClick {
	handleClick: (value: ICategoryItem[], onChange: (hint: ICategoryItem[]) => void) => (categoryItem: ICategoryItem) => void;
}

export interface ISwiperCategoryItemClick2 {
	handleClick: (categoryItem: ICategoryItem) => void;
}

export interface ISwiperCategoryItemClick {
	handleClick: (value: ICategoryItem[], onChange: (hint: ICategoryItem[]) => void) => (categoryItem: ICategoryItem) => void;
}

export interface IHandleClickTagInCard {
	handleClickTagInCard: (tagTitle: string, tagId: number, type: 'tagInCard' | 'tagInList') => () => void;
}
