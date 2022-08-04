import { createAsyncThunk } from '@reduxjs/toolkit';
import { octoAxios } from '@/lib/http';
import { IDefaultFetchSuccess } from '../../../../types/types';
import {IPaymentModel} from '@/models/IPaymentModel';
import {changeUserBalance} from "@/reducers/adminSlice/adminSlice";

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

export const fetchDeleteTransaction = createAsyncThunk(
	'paymentSlice/delete',
	async (data: { operationId: number, operationSum: number}, thunkAPI) => {
		try {
			const {operationId, operationSum} = data;
			const {
				adminReducer: {adminSwitchIdToUser},
				paymentReducer: {historyBalance}
			} = thunkAPI.getState() as {
				adminReducer: {adminSwitchIdToUser: number},
				paymentReducer: {historyBalance: IPaymentModel[], balance: number}
			};
			const response = await octoAxios.delete<IDefaultFetchSuccess>(`/admin/user/${adminSwitchIdToUser}/balance_history/${operationId}`);
			if (response.data?.message === 'success') {
				thunkAPI.dispatch(changeUserBalance(operationSum > 0 ? operationSum - (operationSum * 2) : Math.abs(operationSum)));
				return historyBalance.filter(item => item.id !== operationId);
			}
			return historyBalance;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка удаления баланса');
		}
	});
