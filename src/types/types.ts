import {IAddressModel} from '@/models/IAddressModel';

export interface IOrderInfo {
	id: number,
	status: string,
	orderNumber: string,
	trackNumber: string,
	shop: string,
	storage: string,
	daysLeft: number,
}

export interface IOrderCardStyles {
	highlight?: boolean,
	disabled?: boolean,
}

export interface IOrderCard extends IOrderInfo, IOrderCardStyles {}

export type AddressFetchObject = Omit<IAddressModel, 'id'>;

export interface IRecoveryMessage {
	email: string
}

export interface IUpdatePassword {
	old_password: string,
	new_password: string,
}

export interface IAddOrder {
	title: string,
	track_number: string,
	comment?: string
}

export interface IRepeatPasswordForm {
	token: string,
}

export interface ISendRecoveryPass extends IRepeatPasswordForm{
	password: string
}
