import { createAsyncThunk } from '@reduxjs/toolkit';
import { octoAxios } from '@/lib/http';
import { IDefaultFetchSuccess } from '../../../../types/types';

export const fetchAdminAddPaymentInUser = createAsyncThunk(
	'paymentSlice/add',
	async (
		data: {comment: string, amount: number, userId: number},
		thunkAPI
	) => {
		try {
			const response = await octoAxios.post<IDefaultFetchSuccess>('/admin/user/balance', data);
			return {
				message: response.data?.message == 'success' ? 'Платеж успешно проведён' : ''
			};
		} catch (e) {
			thunkAPI.rejectWithValue('error paymentSlice/add');
		}
	}
);

export const fetchSendPaymentMessageInEmail = createAsyncThunk(
	'paymentSlice/email',
	async (_, thunkAPI) => {
		try {
			const response = await octoAxios.get<IDefaultFetchSuccess>('/user/send_message/add_balance');
			return response.data?.message === 'success' ? 'Запрос успешно создан' : '';
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка при отправке запроса, повторите позже.');
		}
	}
);
