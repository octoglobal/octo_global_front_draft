import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {octoAxios} from '@/lib/http';
import {IShopsSearchResponse, IShopsTagsResponse} from '@/models/IShopsModel';
import {ICategoryModelResponse} from '@/models/ICategoryModel';

export const fetchSearchShops = createAsyncThunk(
	'shopsSlice/search',
	async (data: { search: string }, thunkAPI) => {
		try {
			const response =
				await octoAxios.get<IShopsSearchResponse>(`/shops?search=${data.search}`)
					.then(response => response.data);
			return {
				shops: response.search_results,
				search: data.search,
			};
		} catch (e) {
			if (axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);

export const fetchTagShops = createAsyncThunk(
	'shopsSlice/tags',
	async (data: { tagsQuery: string }, thunkAPI) => {
		try {
			const response =
				await octoAxios.get<IShopsTagsResponse>(`/shops?${data.tagsQuery}page=1`)
					.then(response => response.data);
			return {
				shops: response.shops,
				shopsEnd: !(response.shops.length === response.postsOnPage),
				tags: data.tagsQuery,
			};
		} catch (e) {
			if (axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);

export const fetchMoreTagShops = createAsyncThunk(
	'shopsSlice/moreTags',
	async (data: { tagsQuery: string, page: number }, thunkAPI) => {
		try {
			const response =
				await octoAxios.get<IShopsTagsResponse>(`/shops?${data.tagsQuery}page=${data.page}`)
					.then(response => response.data);
			return {
				shops: response.shops,
				shopsEnd: !(response.shops.length === response.postsOnPage),
				tags: data.tagsQuery,
			};
		} catch (e) {
			if (axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);


export const fetchAllTagsShops = createAsyncThunk(
	'shopsSlice/allTags',
	async (_, thunkAPI) => {
		try {
			const response =
				await octoAxios.get<ICategoryModelResponse>('/shops_tags')
					.then(response => response.data);
			return response.shops_tags;
		} catch (e) {
			if (axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);
