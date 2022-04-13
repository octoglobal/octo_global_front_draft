import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {octoAxios} from '@/lib/http';
import {IShopsResponse} from '@/models/IShopsModel';

export const fetchSearchShops = createAsyncThunk(
	'shopsSlice/search',
	async (data: { search: string }, thunkAPI) => {
		try {
			const response =
				await octoAxios.get<IShopsResponse>(`/shops?search=${data.search}`)
					.then(response => response.data);
			return response.search_results;
		} catch (e) {
			if(axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);
