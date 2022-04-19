import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {octoAxios} from '@/lib/http';
import {IReviewAddSubmit, IReviewAddSubmitMobile} from '../../../../types/types';

export const fetchReviews = createAsyncThunk(
	'reviews/get',
	async (data : {page: number, page_limit: number}, thunkAPI) => {
		try {
			const response = await octoAxios.get('/reviews', {params: data});
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


export const fetchAddReviewsMobile = createAsyncThunk(
	'reviews/add_review_mobile',
	async (data: IReviewAddSubmitMobile, thunkAPI) => {
		try {
			const response = await octoAxios.post<{message: string}>('/add_review', data);
			if (response.data.message === 'success') {
				return {
					createdTime: new Date().toString(),
					id: data.userId,
					text: data.text,
					userName: data.userName,
				};
			}
		} catch (e : unknown) {
			if(axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);


export const fetchMoreReviews = createAsyncThunk(
	'reviews/getMobile',
	async (data : {page: number, page_limit: number}, thunkAPI) => {
		try {
			const response = await octoAxios.get('/reviews', {params: data});
			return {
				reviews: response.data.reviews,
				reviewsEnd: !(response.data.reviews.length === data.page_limit)
			};
		} catch (e : unknown) {
			if(axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);
