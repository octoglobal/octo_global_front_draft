import {IOrderModel} from '@/models/IOrderModel';

export const useOrderItemSend = (orderId: number, orderItem: IOrderModel) => {
	return {
		orderId,
		orderItem
	};
};
