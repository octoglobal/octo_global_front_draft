import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	fetchAdminAddPaymentInUser,
	fetchSendPaymentMessageInEmail,
} from '@/reducers/paymentSlice/asyncThunk/paymentApi';

interface IPaymentSliceInitialState {
	currentCourseEuro: number;
	balance: number;
	historyBalance: number[];
	statusMessage: string;
}

const initialState: IPaymentSliceInitialState = {
	currentCourseEuro: 7532,
	balance: 15100,
	historyBalance: [],
	statusMessage: '',
};

export const paymentSlice = createSlice({
	name: 'paymentSlice',
	initialState,
	reducers: {
		resetStatusMessage (state, action: PayloadAction<string>) {
			state.statusMessage = action.payload;
		}
	},
	extraReducers: {
		[fetchAdminAddPaymentInUser.fulfilled.type]: (state, action: PayloadAction<{message: string}>) => {
			state.statusMessage = action.payload.message;
		},
		[fetchSendPaymentMessageInEmail.fulfilled.type]: (state, action: PayloadAction<string>) => {
			state.statusMessage = action.payload;
		},
		[fetchSendPaymentMessageInEmail.rejected.type]: (state, action: PayloadAction<string>) => {
			state.statusMessage = action.payload;
		}
	}
});

export default paymentSlice.reducer;
