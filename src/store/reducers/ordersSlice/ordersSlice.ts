import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOrdersAndPackages} from '@/reducers/ordersSlice/asyncActions/orderApi';
import {IOrderModel} from '@/models/IOrderModel';

export interface IOrdersSlice {
	orders: IOrderModel[] | [],
}

const initialState : IOrdersSlice = {
	orders: []
};

export const orderSlice = createSlice({
	name: 'orders/package',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchOrdersAndPackages.fulfilled.type]: (state, data: PayloadAction<IOrdersSlice> ) => {
			//TODO: исходно возвращает user_orders
			// ts_ignore так как с сервера возвращается user_orders, а не orders
			// @ts-ignore
			state.orders = data.payload.user_orders;
		}
	}
});

export default orderSlice.reducer;
