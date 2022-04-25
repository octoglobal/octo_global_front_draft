import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
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
	updateData: false,
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
			state.updateData = false;
		},
	},
	extraReducers: {
		[fetchOrderWaitData.fulfilled.type]: (state, action: PayloadAction<IFetchOrderWaitDataFulfilled>) => {
			state.orderWaitData = action.payload.data;
			state.scrollEmpty = action.payload.scrollEmpty;
			state.page += 1;
			state.updateData = false;
		}
	}
});

export default orderWaitSlice.reducer;
