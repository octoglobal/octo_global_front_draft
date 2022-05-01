import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IStockDataModel} from '@/models/IStockDataModel';
import {
	fetchMergeOrders,
	fetchOrderStockData,
	fetchPackageStockData, fetchUnMergePackage
} from '@/reducers/orderStockSlice/asynThunk/stockApi';
import {IPackageModel} from '@/models/IPackageModel';

interface IInitialState {
	page: number;
	pageLimit: number;
	stockData: IStockDataModel[];
	packageData: IPackageModel[];
	updatePosts: boolean;
	packageFetch: boolean;
	ordersEnd: boolean;
	packageEnd: boolean;
}

const initialState: IInitialState = {
	page: 1,
	pageLimit: 50,
	stockData: [],
	packageData: [],
	packageEnd: false,
	updatePosts: false,
	packageFetch: false,
	ordersEnd: false,
};

interface IFetchOrderStockData {
	data: IStockDataModel[],
	ordersEnd: boolean,
}

interface IFetchPackageStockData {
	packageData: IPackageModel[],
	packageEnd: boolean,
}

interface IFetchMergeOrders {
	orderData: IStockDataModel[],
	packageData: IPackageModel,
}

interface IFetchUnMergePackage {
	orderData: IStockDataModel[],
	packageData: IPackageModel[],
}

export const orderStockSlice = createSlice({
	name: 'orderStockSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchOrderStockData.fulfilled.type]: (state, action: PayloadAction<IFetchOrderStockData>) => {
			state.page += 1;
			state.updatePosts = false;
			state.stockData = [...state.stockData, ...action.payload.data];
			state.ordersEnd = action.payload.ordersEnd;
		},
		[fetchPackageStockData.fulfilled.type]: (state, action: PayloadAction<IFetchPackageStockData>) => {
			state.packageData = [...state.packageData, ...action.payload.packageData];
			state.packageEnd = action.payload.packageEnd;

		},
		[fetchMergeOrders.fulfilled.type]: (state, action: PayloadAction<IFetchMergeOrders>) => {
			state.stockData = action.payload.orderData;
			state.packageData = [ action.payload.packageData, ...state.packageData];
		},
		[fetchUnMergePackage.fulfilled.type]: (state, action: PayloadAction<IFetchUnMergePackage>) => {
			state.packageData = action.payload.packageData;
			state.stockData = [ ...action.payload.orderData, ...state.stockData];
		},
	}
});

export default orderStockSlice.reducer;
