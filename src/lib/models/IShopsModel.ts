export interface IShopsModelTags {
	shop_tag_id: number;
	shop_tag_title: string;
}

export interface IShopsModel {
	alias: null | string;
	description: null | string;
	id: number;
	logo: null | string;
	photo: string;
	tags: IShopsModelTags[]
	title: string;
	url: string;
}

export interface IShopsSearchResponse {
	search_results: IShopsModel[];
}

export interface IShopsTagsResponse {
	shops: IShopsModel[];
	postsOnPage: number;
}
