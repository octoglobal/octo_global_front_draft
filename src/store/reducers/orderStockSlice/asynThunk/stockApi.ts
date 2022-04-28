import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IStockDataModel} from '@/models/IStockDataModel';

interface IFetchOrderStockData {
	page: number;
	page_limit: number;
	package: boolean;
}

interface IFetchOrderStockDataRes {
	orders: IStockDataModel
}

export const fetchOrderStockData = createAsyncThunk(
	'orderStockSlice/data',
	async (data: IFetchOrderStockData, thunkAPI) => {
		try {
			const response = await octoAxios.get<IFetchOrderStockDataRes>('/user/orders/are_waiting', {params: data}).then(r => r.data);
			return response.orders;
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/data');
		}
	}
);
