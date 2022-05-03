import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IStockDataModel} from '@/models/IStockDataModel';
import { findItemInArrayForId, sortItemArrayInId } from '@/services/services';
import {IDefaultFetchSuccess} from '../../../../types/types';
import {IPackageModel} from '@/models/IPackageModel';
import { orderStockSlice } from '@/reducers/orderStockSlice/orderStockSlice';

interface IFetchOrderStockData {
	page: number;
	page_limit: number;
	package: boolean;
}

interface IFetchOrderStockDataRes {
	orders: IStockDataModel[]
}

interface IFetchPackageStockDataRes {
	packages: IPackageModel[]
}

export const fetchOrderStockData = createAsyncThunk(
	'orderStockSlice/data',
	async (data: IFetchOrderStockData, thunkAPI) => {
		try {
			const response = await octoAxios.get<IFetchOrderStockDataRes>('/user/orders/are_waiting', {params: data}).then(r => r.data);
			return {
				data: response.orders,
				ordersEnd: !(response.orders.length === data.page_limit)
			};
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/data');
		}
	}
);


export const fetchPackageStockData = createAsyncThunk(
	'orderStockSlice/dataPackage',
	async (data: IFetchOrderStockData, thunkAPI) => {
		try {
			const response = await octoAxios.get<IFetchPackageStockDataRes>('/user/orders/are_waiting', {params: data}).then(r => r.data);
			return {
				packageData: response.packages,
				packageEnd: !(response.packages.length === data.page_limit)
			};
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/data');
		}
	}
);

export const fetchOrderReturn = createAsyncThunk(
	'orderStockSlice/return',
	async (data: { orderId: number }, thunkAPI) => {
		try {
			await octoAxios.get(`/user/send_message/order_return/${data.orderId}`);
			const {orderStockReducer: {stockData}} = thunkAPI.getState() as { orderStockReducer: { stockData: IStockDataModel[] } };
			return stockData.filter(item => item.id !== data.orderId);
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/return');
			return 'error';
		}
	}
);


export const fetchOrderCheck = createAsyncThunk(
	'orderStockSlice/check',
	async (data: { orderId: number }, thunkAPI) => {
		try {
			await octoAxios.get(`/user/send_message/order_check/${data.orderId}`);
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/return');
			return 'error';
		}
	}
);

export const fetchMergeOrders = createAsyncThunk(
	'orderStockSlice/merge',
	async (data: { orders: number[] }, thunkAPI) => {
		try {
			const {orderStockReducer: {stockData}} = thunkAPI.getState() as { orderStockReducer: { stockData: IStockDataModel[] } };
			const response = await octoAxios.post<{message: string, package: Omit<IPackageModel, 'orders'>}>('/user/package', data);
			if (response.data.message == 'success') {
				return {
					orderData: sortItemArrayInId(stockData, data.orders),
					packageData: {
						...response.data.package,
						orders: findItemInArrayForId(stockData, data.orders),
					} as IPackageModel
				};
			}
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/return');
		}
	}
);

export const fetchUnMergePackage = createAsyncThunk(
	'orderStockSlice/unMerge',
	async (data: { packageId: number }, thunkAPI) => {
		try {
			const {orderStockReducer: {packageData}} = thunkAPI.getState() as { orderStockReducer: { packageData: IPackageModel[] } };
			const response = await octoAxios.delete<IDefaultFetchSuccess>('/user/package', {data});
			if (response.data.message == 'success') {
				const ordersData = packageData.find(item => item.id === data.packageId);
				return {
					orderData: ordersData?.orders ? ordersData.orders : [],
					packageData: packageData.filter(item => item.id !== data.packageId)
				};
			}
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/return');
		}
	}
);

export const fetchPackageAddAddress = createAsyncThunk(
	'orderStockSlice/address',
	async (data: {packageId: number, addressId: number}, thunkAPI) => {
		try {
			const response = await octoAxios.post<IDefaultFetchSuccess>('/user/package/address', {
				'packageId': data.packageId,
				'addressId': data.addressId
			});
			if (response.data.message == 'success') {
				thunkAPI.dispatch(orderStockSlice.actions.resetSlice());
			}
			return 'success';
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/address');
		}
	}
)
