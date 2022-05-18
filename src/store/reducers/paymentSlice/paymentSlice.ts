import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	fetchAdminAddPaymentInUser, fetchHistoryBalanceOperation,
	fetchSendPaymentMessageInEmail,
} from '@/reducers/paymentSlice/asyncThunk/paymentApi';
import {IPaymentModel} from '@/models/IPaymentModel';

interface IPaymentSliceInitialState {
	currentCourseEuro: number;
	balance: number;
	historyBalance: IPaymentModel[];
	statusMessage: string;
	loadingHistoryBalance: boolean;
	isOpenPaymentForm: boolean;
}

const initialState: IPaymentSliceInitialState = {
	currentCourseEuro: 7532,
	balance: 15100,
	historyBalance: [],
	statusMessage: '',
	loadingHistoryBalance: true,
	isOpenPaymentForm: false,
};

export const paymentSlice = createSlice({
	name: 'paymentSlice',
	initialState,
	reducers: {
		resetStatusMessage (state, action: PayloadAction<string>) {
			state.statusMessage = action.payload;
		},
		togglePaymentForm (state) {
			state.isOpenPaymentForm = !state.isOpenPaymentForm;
		},
		resetHistoryBalance (state) {
			state.historyBalance = [];
			state.loadingHistoryBalance = true;
		},
	},
	extraReducers: {
		[fetchSendPaymentMessageInEmail.fulfilled.type]: (state, action: PayloadAction<string>) => {
			state.statusMessage = action.payload;
		},
		[fetchSendPaymentMessageInEmail.rejected.type]: (state, action: PayloadAction<string>) => {
			state.statusMessage = action.payload;
		},
		[fetchHistoryBalanceOperation.fulfilled.type]: (state, action: PayloadAction<IPaymentModel[]>) => {
			state.historyBalance = action.payload;
			state.loadingHistoryBalance = false;
		}
	}
});

export default paymentSlice.reducer;
