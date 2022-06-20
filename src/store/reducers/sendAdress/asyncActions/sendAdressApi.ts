import { octoAxios } from '@/lib/http';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IFetchSendAddress {
	address: string;
}

export const fetchSendAddress = createAsyncThunk(
	'/address/fetchSendAddress',

	async (data: IFetchSendAddress, thunkAPI) => {
		try {
			const response = await octoAxios.get(
				`/user/send_message/wont_consolidation_address/${data.address}`
			);

			if (response.status === 200) {
				return response;
			}
		} catch (e) {
			return thunkAPI.rejectWithValue(
				'Ошибка api /address/fetchSendAddress'
			);
		}
	}
);
