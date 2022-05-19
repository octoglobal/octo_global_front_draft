import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import { updateRate } from '../eutoSlice';



interface IDataEuro {
	currency: string,
    value: number
};

export const fetchEuroRate = createAsyncThunk(	
	'eutoSlice/getRate',
	async  (_, {  rejectWithValue })=> {
		
		try {
			const res = await octoAxios.get('/exchange_rate');
			if (res.status === 200){
				// return res;
			}		
			
		} catch (error) {
			return rejectWithValue('ошибка получениея евро рейт');
		}
	}
);

export const fetchSetEuroRate = createAsyncThunk(
	'eutoSlice/setRate',
	async  (data:IDataEuro, { dispatch,  rejectWithValue })=> {
		
		try {
			const res = await octoAxios.post('/admin/exchange_rate',data);			
			if (res.status === 200){
				dispatch(updateRate(data.value));
			}
			
			// return res;
		} catch (error) {
			
			return rejectWithValue('ошибка set евро рейт');
		}
	}
);