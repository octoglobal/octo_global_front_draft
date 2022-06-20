import { createSlice } from '@reduxjs/toolkit';
import { fetchSendAddress } from './asyncActions/sendAdressApi';

export interface ISendAdressSlice {
	sending: string;
}

const initialState: ISendAdressSlice = {
	sending: 'done',
};

export const sendAdressSlice = createSlice({
	name: 'user/SendAdressSlice',
	initialState,
	reducers: {},

	extraReducers: {
		[fetchSendAddress.fulfilled.type]: (state) => {
			state.sending = 'done';
		},
		[fetchSendAddress.rejected.type]: (state) => {
			state.sending = 'error';
		},
		[fetchSendAddress.pending.type]: (state) => {
			state.sending = 'loading';
		},
	},
});

export default sendAdressSlice.reducer;
