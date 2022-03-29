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
};

export interface IOrderCard extends IOrderInfo, IOrderCardStyles {}
