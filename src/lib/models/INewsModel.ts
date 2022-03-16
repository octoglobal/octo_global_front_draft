interface INewsModel {
	readonly id: number;
	readonly title: string;
	readonly body: string;
	readonly statusId: string;
	readonly cratedTime: Date;
	readonly updateTime: Date;
}
