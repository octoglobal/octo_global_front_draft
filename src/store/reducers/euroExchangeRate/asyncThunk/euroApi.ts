import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import { updateRate } from '../eutoSlice';



interface IDataEuro {
	currency: string,
    value: number
};

export const fetchEuroRate = createAsyncThunk(	
	'eutoSlice/getRate',
	async function (_, {  rejectWithValue }) {
		
		try {
			const res = await octoAxios.get('/exchange_rate');		
			return res;
		} catch (error) {
			return rejectWithValue('ошибка получениея евро рейт');
		}
	}
);

export const fetchSetEuroRate = createAsyncThunk(
	'eutoSlice/setRate',
	async function (data:IDataEuro, { dispatch,  rejectWithValue }) {
		
		try {
			const res = await octoAxios.post('/admin/exchange_rate',data);
			
			dispatch(updateRate(data.value));
			return res;
		} catch (error) {
			
			return rejectWithValue('ошибка set евро рейт');
		}
	}
);