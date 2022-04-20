export interface IBlogModelProducts {
	body: string;
	photo: string;
	title: string;
	url: string;
}


export interface IBlogModel {
	readonly newPost: boolean,
	readonly title: string;
	readonly body: string;
	readonly createdTime: string;
	readonly editedTime: null;
	readonly id: number;
	readonly products: IBlogModelProducts[];
}
