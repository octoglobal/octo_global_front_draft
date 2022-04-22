import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IOrderModel} from '@/models/IOrderModel';

interface IOrderWaitData {
	page: number;
	pageLimit: number;
}

interface IOrderWaitDataRes {
	orders: IOrderModel[]
}

export const fetchOrderWaitData = createAsyncThunk(
	'orderWaitSlice/data',
	async (data: IOrderWaitData, thunkAPI) => {
		try {
			const response = await octoAxios.get<IOrderWaitDataRes>(
				'/user/orders/expected',
				{params: {page: data.page, page_limit: data.pageLimit}}
			).then(response => response.data);
			console.log(response);
			return {
				data: response.orders,
				scrollEmpty: !(response.orders.length === data.pageLimit)
			};
		} catch (e) {
			thunkAPI.rejectWithValue('Error api user/orders/expected');
		}
	}
);
