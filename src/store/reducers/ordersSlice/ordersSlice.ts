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
			state.orders = data.payload.orders;
		}
	}
});

export default orderSlice.reducer;
