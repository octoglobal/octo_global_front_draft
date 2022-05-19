import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchEuroRate,fetchSetEuroRate } from '@/reducers/euroExchangeRate/asyncThunk/euroApi';


interface IEuroSlice {
	currency: string,
    value: number
};




const initialState: IEuroSlice = {
	currency: 'EUR',
	value: 0
};

export const euroSlice = createSlice({
	name: 'euroSlice',
	initialState,
	reducers: {
		updateRate: (state,action) => {			
			state.value = action.payload / 100;
		},
	},
	extraReducers: {		
		[fetchEuroRate.pending.type]: (state) => {
			console.log('пошел запрос');
		},
		[fetchEuroRate.fulfilled.type]: (state, action) => {		
			state.value = action.payload.data.exchange_rate[0].value / 100;
		},
		[fetchEuroRate.rejected.type]: (state, action) => {
			// console.log(action.payload);
			
		},
		[fetchSetEuroRate.pending.type]: (state, action) => {
			// console.log('пошел запрос fetchSetEuroRate',action);
			
		},
		[fetchSetEuroRate.fulfilled.type]: (state, action) => {
			console.log('запрос fetchSetEuroRate ok',action);
			state.value =action.payload / 100;
			
		},
		[fetchSetEuroRate.rejected.type]: (state, action) => {
			// console.log('fetchSetEuroRate err',action.payload);
			
		},
	}
});

export const { updateRate} =
euroSlice.actions;

export default euroSlice.reducer;
