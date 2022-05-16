import {createSlice} from '@reduxjs/toolkit';

interface IPaymentSliceInitialState {
	currentCourseEuro: number;
	balance: number;
	historyBalance: number[]
}

const initialState: IPaymentSliceInitialState = {
	currentCourseEuro: 7532,
	balance: 15100,
	historyBalance: [],
};

export const paymentSlice = createSlice({
	name: 'paymentSlice',
	initialState,
	reducers: {},
	extraReducers: {}
});

export default paymentSlice.reducer;
