import {IOrderModel} from '@/models/IOrderModel';

export interface IPackageModel {
	address: null | string;
	addressId: null | number;
	id: number;
	longId: number;
	orders: IOrderModel[],
	statusId: number;
	trackNumber: null | number;
	tracking_link: null | string;
}
