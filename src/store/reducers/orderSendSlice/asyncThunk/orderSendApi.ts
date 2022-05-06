import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IPackageModel} from '@/models/IPackageModel';
import {IDefaultFetchSuccess} from '../../../../types/types';

export const fetchOrdersSendData = createAsyncThunk(
	'orderSendSlice/data',
	async (
		data: {url: string, page: number, page_limit: number, userId: number},
		thunkAPI
	) => {
		try {
			const response = await octoAxios.get<{packages: IPackageModel[]}>(
				data.url,
				{params: {
					page: data.page,
					page_limit: data.page_limit,
					userId: data.userId,
				}});
			console.log(response.data.packages);
			return response.data.packages;
		} catch (e) {
			thunkAPI.rejectWithValue('error orderSendSlice/data');
		}
	}
);

export const fetchDeletePackageInSend = createAsyncThunk(
	'orderSendSlice/delete',
	async (
		data: {userId: number, packageId: number},
		thunkAPI
	) => {
		try {
			const {orderSendReducer: {sendData}} = thunkAPI.getState() as {orderSendReducer: {sendData: IPackageModel[]}};
			const response = await octoAxios.delete<IDefaultFetchSuccess>('/admin/package_with_orders', {data});
			if (response.data.message === 'success') {
				return sendData.filter(item => item.id !== data.packageId);
			}
			return sendData;
		} catch (e) {
			thunkAPI.rejectWithValue('error orderSendSlice/delete');
		}
	}
);

export const fetchDeleteTrackNumber = createAsyncThunk(
	'orderSendSlice/deleteTrackNumber',
	async (
		data: {userId: number, packageId: number},
		thunkAPI,
	) => {
		try {
			const {orderSendReducer: {sendData}} = thunkAPI.getState() as {orderSendReducer: {sendData: IPackageModel[]}};
			const response = await octoAxios.delete(
				'/admin/package_track',
				{data}
			);
			if (response.data.message === 'success') {
				return sendData.filter(item => item.id !== data.packageId);
			}
			return sendData;
		} catch (e) {
			thunkAPI.rejectWithValue('error orderSendSlice/deleteTrackNumber');
		}
	}
);
