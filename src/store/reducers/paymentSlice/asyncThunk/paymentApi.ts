import { createAsyncThunk } from '@reduxjs/toolkit';
import { octoAxios } from '@/lib/http';
import { IDefaultFetchSuccess } from '../../../../types/types';
import {IPaymentModel} from '@/models/IPaymentModel';

export const fetchAdminAddPaymentInUser = createAsyncThunk(
	'paymentSlice/add',
	async (
		data: {comment: string, amount: number, userId: number},
		thunkAPI
	) => {
		try {
			const response = await octoAxios.post<IDefaultFetchSuccess>('/admin/user/balance', data);
			console.log(response);
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
	async (data: {isTablet: boolean}, thunkAPI) => {
		try {
			const response = await octoAxios.get<IDefaultFetchSuccess>('/user/send_message/add_balance');
			return response.data?.message === 'success' ? `Заявка на пополнение успешно отправлена. ${!data.isTablet ? '\n' : ''}` + 'Наш менеджер свяжется с вами в ближайшее время.' : '';
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка при отправке запроса, повторите позже.');
		}
	}
);

export const fetchHistoryBalanceOperation = createAsyncThunk(
	'paymentSlice/history',
	async (data: {url: string}, thunkAPI) => {
		try {
			const response = await octoAxios.get<{balance_history: IPaymentModel[]}>(data.url);
			return response.data.balance_history;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка при получении баланса');
		}
	}
);
