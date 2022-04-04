import {octoAxios} from '@/lib/http';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {IAddOrder} from '../../../../types/types';

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
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка api user/logout');
		}
	}
);
