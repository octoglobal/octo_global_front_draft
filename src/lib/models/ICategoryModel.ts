export interface ICategoryModel {
	readonly id: number;
	readonly title: string;
}

export interface ICategoryModelResponse {
	readonly shops_tags: ICategoryModel[];
}
