import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IStockDataModel} from '@/models/IStockDataModel';
import {fetchOrderStockData} from '@/reducers/orderStockSlice/asynThunk/stockApi';

interface IInitialState {
	page: number;
	pageLimit: number;
	stockData: IStockDataModel[];
	updatePosts: boolean;
	packageFetch: boolean;
}

const initialState: IInitialState = {
	page: 1,
	pageLimit: 50,
	stockData: [],
	updatePosts: false,
	packageFetch: false,
};

export const orderStockSlice = createSlice({
	name: 'orderStockSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchOrderStockData.fulfilled.type]: (state, action: PayloadAction<IStockDataModel[]>) => {
			state.page += 1;
			state.updatePosts = false;
			state.stockData = [...state.stockData, ...action.payload];
		}
	}
});

export default orderStockSlice.reducer;
