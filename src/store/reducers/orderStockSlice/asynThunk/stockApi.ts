import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IStockDataModel} from '@/models/IStockDataModel';
import { findItemInArrayForId, sortItemArrayInId } from '@/services/services';
import {IDefaultFetchSuccess} from '../../../../types/types';
import {IPackageModel} from '@/models/IPackageModel';
import { orderStockSlice, IInitialStateStockSlice } from '@/reducers/orderStockSlice/orderStockSlice';
import {IOrderModel} from '@/models/IOrderModel';


interface IFetchDeleteData {
	userId: number;
	orderId: number[];
	successCallback: () => void;
	ordersData: IOrderModel[];
}
interface IFetchOrderStockData {
	page: number;
	page_limit: number;
	package: boolean;
	url: string;
	userId: number | null;
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
			const response = await octoAxios.get<IFetchOrderStockDataRes>(data.url, {params: {
				package: data.package,
				page: data.page,
				page_limit: data.page_limit,
				userId: data.userId
			}}).then(r => r.data);
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
			const response = await octoAxios.get<IFetchPackageStockDataRes>(data.url, {params: {
				package: data.package,
				page: data.page,
				page_limit: data.page_limit,
				userId: data.userId
			}
			}).then(r => r.data);
			return {
				packageData: response.packages,
				packageEnd: !(response.packages.length === data.page_limit),
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
	async (data: { orders: number[], url: string, userId: number }, thunkAPI) => {
		try {
			const {orderStockReducer: {stockData}} = thunkAPI.getState() as { orderStockReducer: { stockData: IStockDataModel[] } };
			const response = await octoAxios.post<{message: string, package: Omit<IPackageModel, 'orders'>}>(data.url, data);
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
	async (data: { packageId: number, url: string, userId: number | null }, thunkAPI) => {
		try {
			const {orderStockReducer: {packageData}} = thunkAPI.getState() as { orderStockReducer: { packageData: IPackageModel[] } };
			const response = await octoAxios.delete<IDefaultFetchSuccess>(data.url, {data: {packageId: data.packageId, userId: data.userId}} );
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
	async (data: {packageId: number, addressId: number, userId: number, url: string}, thunkAPI) => {
		try {
			const response = await octoAxios.post<IDefaultFetchSuccess>(data.url, {
				'packageId': data.packageId,
				'addressId': data.addressId,
				'userId': data.userId,
			});
			if (response.data.message == 'success') {
				thunkAPI.dispatch(orderStockSlice.actions.resetSlice());
			}
			return 'success';
		} catch (e) {
			thunkAPI.rejectWithValue('Error orderStockSlice/address');
		}
	}
);

export const fetchOrderDelete = createAsyncThunk(
	'orderStockSlice/deleteOrder',
	async (data: {order: IOrderModel}, thunkAPI) => {
		const orderItem = data.order;
		try {
			const { orderStockReducer: {stockData} } = thunkAPI.getState() as { orderStockReducer: {stockData: IStockDataModel[]} };
			const response = await octoAxios.delete<IDefaultFetchSuccess>(
				'/admin/orders',
				{data: {userId: orderItem.userId, orderId: [orderItem.id]}}
			).then(r => r.data.message);

			if (response === 'success') {
				return stockData.filter(item => item.id !== orderItem.id);
			}
			return stockData;
		} catch (e) {
			thunkAPI.rejectWithValue('error');
		}
	}
);

export const fetchDeleteStockOrders = createAsyncThunk(
	'orderStockSlice/deleteOrders',
		
	async (data: IFetchDeleteData, {rejectWithValue, getState}) => {
		// console.log('fetchDeleteOrders', data);
		try {
			const sendData = {
				'userId': data.userId,
				'orderId': data.orderId,
			};
			
			const {orderStockReducer} = getState() as {orderStockReducer:IInitialStateStockSlice};
			const response = await octoAxios.delete<IDefaultFetchSuccess>('/admin/orders', {
				data: sendData
			});
			if (response.status === 200){		
				data.successCallback();
				const all = orderStockReducer.stockData;			
				const whatDelete = data.orderId;	

				const result = [];
				for (let i = 0; i < all.length; i++) {
					if (whatDelete.indexOf(all[i].id) == -1) {
					  result.push(all[i]);
					}
				  }
				
				return result;
			}
			

		} catch (e) {
			return rejectWithValue('Error orderStockSlice/delete');
		}
	}
);

export const fetchPackageRemoveAddress = createAsyncThunk(
	'orderStockSlice/deleteAddressToPackage',
	async (data: {userId: number, packageId: number}, thunkAPI) => {
		try {
			const {orderStockReducer: {packageData}} = thunkAPI.getState() as {orderStockReducer: {packageData: IPackageModel[]}};
			const response = await octoAxios.delete<IDefaultFetchSuccess>(
				'/admin/package/address',
				{data: {
					userId: data.userId,
					packageId: data.packageId
				}}
			).then(r => {
				if (r.data.message == 'success') {
					return packageData.map(item => {
						if (item.id === data.packageId) {
							return {
								...item,
								address: null,
								addressId: null,
								statusId: 4,
							};
						}
						return item;
					});
				}
			}).catch(() => packageData);
			console.log(response);
			return response;
		} catch (e) {
			thunkAPI.rejectWithValue('error');
		}
	}
);

export const fetchChangeStatusPackageToSend = createAsyncThunk(
	'orderStockSlice/changeStatus',
	async (
		data: {userId: number, trackNumber: string, packageId: number},
		thunkAPI
	) => {
		try {
			const {orderStockReducer: {packageData}} = thunkAPI.getState() as {orderStockReducer: {packageData: IPackageModel[]}};
			const response = await octoAxios.post<IDefaultFetchSuccess>('/admin/package_track', data);
			return {
				message: response.data.message,
				packageData: packageData.filter(item => item.id !== data.packageId)
			};
		} catch (e) {
			thunkAPI.rejectWithValue('error orderStockSlice/changeStatus');
		}
	}
);

export const fetchDeletePackage = createAsyncThunk(
	'orderStockSlice/deletePackage',
	async (
		data: {userId: number, packageId: number},
		thunkAPI
	) => {
		const {orderStockReducer: {packageData}} = thunkAPI.getState() as {orderStockReducer: {packageData: IPackageModel[]}};
		const response = await octoAxios.delete<IDefaultFetchSuccess>('/admin/package_with_orders', {data});
		if (response.data.message === 'success') {
			return packageData.filter(item => item.id !== data.packageId);
		}
		return packageData;
	}
);
