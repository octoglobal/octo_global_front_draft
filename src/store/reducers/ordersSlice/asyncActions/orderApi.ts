import {octoAxios} from '@/lib/http';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IAddOrder, IDeleteOrder} from '../../../../types/types';

export const fetchOrdersAndPackages = createAsyncThunk(
	'address/get',
	async(__, thunkAPI) => {
		try {
			const response = await octoAxios.get('/user/orders');
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('address/get');

		}
	}
);

export const fetchAddOrders = createAsyncThunk(
	'address/add',
	async (data : IAddOrder, thunkAPI) => {
		try {
			const response = await octoAxios.post('/user/orders', data);
			console.log('response: ', response);
			return response.status;
		} catch (e : unknown) {
			if (axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);

export const fetchDeleteOrders = createAsyncThunk(
	'address/delete',
	async (data : IDeleteOrder, thunkAPI) => {
		try {
			console.log('data: ', data);
			const response = await octoAxios.delete('/user/orders', {data});
			console.log('response: ', response);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка api user/logout');
		}
	}
);
