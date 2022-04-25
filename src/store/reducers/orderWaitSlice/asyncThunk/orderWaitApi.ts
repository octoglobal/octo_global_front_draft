import {createAsyncThunk} from '@reduxjs/toolkit';
import {octoAxios} from '@/lib/http';
import {IOrderModel} from '@/models/IOrderModel';

interface IOrderWaitData {
	page: number;
	pageLimit: number;
	userId?: number;
}

interface IOrderWaitDataRes {
	orders: IOrderModel[]
}

export const fetchOrderWaitData = createAsyncThunk(
	'orderWaitSlice/data',
	async (data: IOrderWaitData, thunkAPI) => {
		try {
			const apiUrl = data?.userId ? '/admin/user/orders/expected' : '/user/orders/expected';
			const params = data?.userId ? (
				{page: data.page, page_limit: data.pageLimit, userId: data.userId}
			) : (
				{page: data.page, page_limit: data.pageLimit}
			);


			const response = await octoAxios.get<IOrderWaitDataRes>(apiUrl, {params})
				.then(response => response.data);
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
