import {IOrderModel} from '@/models/IOrderModel';

interface IAddress {
	address_string: string;
	id: number;
	latitude: string;
	longitude: string;
	name: string;
	phone: string;
	surname: string;
}

export interface IPackageModel {
	address: null | IAddress;
	addressId: null | number;
	id: number;
	longId: number;
	orders: IOrderModel[],
	statusId: number;
	trackNumber: null | number;
	tracking_link: null | string;
}
