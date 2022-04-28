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

export const fetchOrderReturn = createAsyncThunk(
	'orderStockSlice/return',
	async (data: {orderId: number}, thunkAPI) => {
		try {
			await octoAxios.get(`/user/send_message/order_return/${data.orderId}`);
			const { orderStockReducer: {stockData} } = thunkAPI.getState() as {orderStockReducer: {stockData: IStockDataModel[]}};
			return stockData.filter(item => item.id !== data.orderId);
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/return');
			return 'error';
		}
	}
);


export const fetchOrderCheck = createAsyncThunk(
	'orderStockSlice/check',
	async (data: {orderId: number}, thunkAPI) => {
		try {
			await octoAxios.get(`/user/send_message/order_check/${data.orderId}`);
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/return');
			return 'error';
		}
	}
);
