import {IShopsModel} from '@/models/IShopsModel';
import {ICategoryItem} from '@/components/Shops/type';
import {IHints} from '@/components/AnyPage/CategorySearch/types';

export interface IShopsSlice {
	page: number;
	shops: IShopsModel[];
	updateShops: boolean
	shopsEnd: boolean;
	tags: string;
	allTags: ICategoryItem[]
	search: string;
	searchHints: IHints[];
	isNotFoundShops: boolean;
	error: string;
}

export interface ISearchNullShopsSlice {
	isSearchNotFound: boolean
}

export interface IFetchMoreTagShopsFulfilled {
	shops: IShopsModel[];
	shopsEnd: boolean;
	tags: string;
}

export interface IFetchSearchShopsFulfilled {
	shops: IShopsModel[],
	search: string
}
