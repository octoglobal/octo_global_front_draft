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
		
		[fetchEuroRate.fulfilled.type]: (state, action) => {		
			state.value = action.payload.data.exchange_rate[0].value / 100;
		},
		
		
		[fetchSetEuroRate.fulfilled.type]: (state, action) => {
		
			state.value =action.payload / 100;
			
		},
		
	}
});

export const { updateRate} =
euroSlice.actions;

export default euroSlice.reducer;
