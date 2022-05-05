import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IPackageModel} from '@/models/IPackageModel';

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
