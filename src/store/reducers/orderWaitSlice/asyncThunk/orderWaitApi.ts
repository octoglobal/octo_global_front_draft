import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IOrderModel} from '@/models/IOrderModel';
import {IDefaultFetchSuccess} from '../../../../types/types';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import {sortItemArrayInId} from '@/services/services';

interface IOrderWaitData {
	page: number;
	pageLimit: number;
	userId?: number;
}

interface IOrderWaitDataRes {
	orders: IOrderModel[]
}


export const fetchOrderWaitData = createAsyncThunk(
	'orderWaitSlice/data',
	async (data: IOrderWaitData, thunkAPI) => {
		try {
			const apiUrl = data?.userId ? '/admin/user/orders/expected' : '/user/orders/expected';
			const params = data?.userId ? (
				{page: data.page, page_limit: data.pageLimit, userId: data.userId}
			) : (
				{page: data.page, page_limit: data.pageLimit}
			);


			const response = await octoAxios.get<IOrderWaitDataRes>(apiUrl, {params})
				.then(response => response.data);
			return {
				data: response.orders,
				scrollEmpty: !(response.orders.length === data.pageLimit)
			};
		} catch (e) {
			thunkAPI.rejectWithValue('Error api user/orders/expected');
		}
	}
);


interface IFetchDeleteData {
	userId: number;
	orderId: number[];
	successCallback: () => void;
	ordersData: IOrderModel[];
}

export const fetchDeleteOrders = createAsyncThunk(
	'orderWaitSlice/delete',
	async (data: IFetchDeleteData, {rejectWithValue, getState}) => {
		try {
			const sendData = {
				'userId': data.userId,
				'orderId': data.orderId,
			};

			const {orderWaitReducer: {orderWaitData}} = getState() as { orderWaitReducer: { orderWaitData: IOrderModel[] } };
			const response = await octoAxios.delete<IDefaultFetchSuccess>('/admin/orders', {
				data: sendData
			}).then(response => {
				if (response.data.message === 'success') {
					data.successCallback();
					return sortItemArrayInId(orderWaitData, data.orderId);
				} else {
					return [];
				}
			});
			return response;
		} catch (e) {
			return rejectWithValue('Error orderWaitSlice/delete');
		}
	}
);

export const fetchChangeStatus = createAsyncThunk(
	'orderWaitSlice/delete',
	async (data: IFetchDeleteData, thunkAPI) => {
		try {
			const sendData = {
				'userId': data.userId,
				'orderId': data.orderId,
			};
			const response = await octoAxios.delete<IDefaultFetchSuccess>('/admin/orders', {
				data: sendData
			}).then(response => {
				if (response.data.message === 'success') {
					data.successCallback();
					return sortItemArrayInId(data.ordersData, data.orderId);

				} else {
					return [];
				}
			});
			return response;
		} catch (e) {
			return thunkAPI.rejectWithValue('Error orderWaitSlice/delete');
		}
	}
);

// const handleDeleteOrder = (orderId: number) => {
// 	return () => {
// 		try {
// 			const sendData = {
// 				'userId': adminSwitchIdToUser,
// 				'orderId': [orderId]
// 			};
// 			octoAxios.delete<IDefaultFetchSuccess>('/admin/orders', {
// 				data: sendData
// 			}).then(response => {
// 				if (response.data.message === 'success') {
// 					handleToggleModal(setIsDeleteModal);
// 					dispatch(orderWaitSlice.actions.sortOrderData(orderId));
// 				}
// 			});
// 		} catch (e) {
// 			throw new Error('Error delete order');
// 		}
// 	};
// };
