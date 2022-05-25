import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {octoAxios} from '@/lib/http';
import {IReviewAddSubmit, IReviewAddSubmitMobile} from '../../../../types/types';
import { deleteReview } from '../reviewsSlice';

export const fetchReviews = createAsyncThunk(
	'reviews/get',
	async (data : {page: number, page_limit: number}, thunkAPI) => {
		console.log('reviews/get', data);
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
			console.log('response: ', response.data);
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
			// console.log(response);
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
			console.log('Get Mobile', response);
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

export const fetchDeleteReview = createAsyncThunk(
	'reviews/delete',
	async (data : {id: number}, {dispatch, rejectWithValue}) => {
		// console.log('DELETE', data);		
		try {
			const res = await octoAxios.delete('/admin/review', { data: { reviewId: data.id }});
			if (res.status === 200){			
				
				dispatch(deleteReview(data.id));
			 }
			 throw new Error('Не удалось удалить удалить отзыв');
			// return data.id;
		} catch (e ) {
		 	return	rejectWithValue('ошибка удаления отзыва');
		}
	}
);