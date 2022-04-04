export interface IOrderModel {
	readonly id: number;
	readonly trackNumber: string;
	readonly statusId: number;
	readonly createdTime: string;
	readonly longId: number;
	readonly title: string;
	readonly tracking_link: string;
	readonly userId: number;
}
