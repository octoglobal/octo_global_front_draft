export interface IShopsModelTags {
	shop_tag_id: number;
	shop_tag_title: string;
}

export interface IShopsModel {
	readonly alias: null | string;
	readonly description: null | string;
	readonly id: number;
	readonly logo: null | string;
	readonly photo: string;
	readonly tags: IShopsModelTags[]
	readonly title: string;
	readonly url: string;
}

export interface IShopsSearchResponse {
	search_results: IShopsModel[];
}

export interface IShopsTagsResponse {
	shops: IShopsModel[];
	postsOnPage: number;
}
