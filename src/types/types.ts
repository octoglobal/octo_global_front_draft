export interface IOrderInfo {
	id: number,
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
