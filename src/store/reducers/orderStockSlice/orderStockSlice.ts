import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IStockDataModel} from '@/models/IStockDataModel';
import {
	fetchChangeStatusPackageToSend, fetchDeletePackage,
	fetchMergeOrders, fetchOrderDelete,
	fetchOrderStockData, fetchPackageRemoveAddress,
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
	ordersEnd: false,
	updatePosts: true,
	packageFetch: false,
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
	reducers: {
		resetSlice(state) {
			state.page = 1;
			state.stockData = [];
			state.packageData = [];
			state.packageEnd = false;
			state.updatePosts = true;
			state.packageFetch = false;
			state.ordersEnd = false;
		},
		filterStockData(state, action: PayloadAction<number>) {
			state.stockData = state.stockData.filter(item => item.id !== action.payload);
		},
		ordersEmptyInDatabase(state) {
			state.updatePosts = true;
			state.ordersEnd = true;
			state.page = 1;
		},
		updatePost(state) {
			state.updatePosts = true;
		}
	},
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
			state.updatePosts = false;
			state.page += 1;
		},
		[fetchMergeOrders.fulfilled.type]: (state, action: PayloadAction<IFetchMergeOrders>) => {
			state.stockData = action.payload.orderData;
			state.packageData = [ action.payload.packageData, ...state.packageData];
		},
		[fetchUnMergePackage.fulfilled.type]: (state, action: PayloadAction<IFetchUnMergePackage>) => {
			state.packageData = action.payload.packageData;
			state.stockData = [ ...action.payload.orderData, ...state.stockData];
		},
		[fetchOrderDelete.fulfilled.type]: (state, action: PayloadAction<IStockDataModel[]>) => {
			state.stockData = action.payload;
		},
		[fetchPackageRemoveAddress.fulfilled.type]: (state, action: PayloadAction<IPackageModel[]>) => {
			state.packageData = action.payload;
		},
		[fetchChangeStatusPackageToSend.fulfilled.type]: (state, action: PayloadAction<{ packageData: IPackageModel[] }>) => {
			state.packageData = action.payload.packageData;
		},
		[fetchDeletePackage.fulfilled.type]: (state, action: PayloadAction<IPackageModel[]>) => {
			state.packageData = action.payload;
		}
	}
});

export default orderStockSlice.reducer;
