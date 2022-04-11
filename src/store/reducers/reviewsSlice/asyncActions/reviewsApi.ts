import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {octoAxios} from '@/lib/http';
import {IReviewAddSubmit} from '../../../../types/types';

export const fetchReviews = createAsyncThunk(
	'reviews/get',
	async (data : {page: number}, thunkAPI) => {
		try {
			// console.log('fetchReviews-data: ', data);
			const response = await octoAxios.get('/reviews', {params: data});
			// console.log('response: ', response);
			return response.data;
		} catch (e : unknown) {
			if(axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);

export const fetchAddReviews = createAsyncThunk(
	'reviews/add_review',
	async (data: IReviewAddSubmit, thunkAPI) => {
		try {
			// console.log('data: ', data);
			const response = await octoAxios.post('/add_review', data);
			return response.data;
		} catch (e : unknown) {
			if(axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);
