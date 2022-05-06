import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchDeleteOrders, fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {IOrderModel} from '@/models/IOrderModel';

interface IInitialState {
	page: number;
	pageLimit: number;
	orderWaitData: IOrderModel[];
	scrollEmpty: boolean;
	updateData: boolean;
}

interface IFetchOrderWaitDataFulfilled {
	data: IOrderModel[],
	scrollEmpty: boolean;
}

const initialState: IInitialState = {
	page: 1,
	pageLimit: 50,
	orderWaitData: [],
	scrollEmpty: false,
	updateData: true,
};

export const orderWaitSlice = createSlice({
	name: 'orderWaitSlice',
	initialState,
	reducers: {
		defaultData(state) {
			state.page = 1;
			state.pageLimit = 50;
			state.orderWaitData = [];
			state.scrollEmpty = false;
			state.updateData = true;
		},
		sortOrderData(state, action: PayloadAction<number>) {
			state.orderWaitData = state.orderWaitData
				.filter(order => order.id !== action.payload);
		},
		updateData(state) {
			state.updateData = true;
		}
	},
	extraReducers: {
		[fetchOrderWaitData.fulfilled.type]: (state, action: PayloadAction<IFetchOrderWaitDataFulfilled>) => {
			state.orderWaitData = [...state.orderWaitData, ...action.payload.data];
			state.scrollEmpty = action.payload.scrollEmpty;
			state.page += 1;
			state.updateData = false;
		},
		[fetchDeleteOrders.fulfilled.type]: (state, action: PayloadAction<IOrderModel[]>) => {
			state.orderWaitData = action.payload;
		},
	}
});

export default orderWaitSlice.reducer;
