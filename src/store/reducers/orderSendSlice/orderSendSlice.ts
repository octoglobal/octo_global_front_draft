import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPackageModel} from '@/models/IPackageModel';
import {
	fetchDeletePackageInSend,
	fetchDeleteTrackNumber,
	fetchOrdersSendData
} from '@/reducers/orderSendSlice/asyncThunk/orderSendApi';

interface IOrderSendState {
	page: number;
	pageLimit: number;
	sendData: IPackageModel[],
	updateData: boolean;
	sendDataEnd: boolean;
}

const initialState: IOrderSendState = {
	page: 1,
	pageLimit: 50,
	sendData: [],
	updateData: true,
	sendDataEnd: false,
};

export const orderSendSlice = createSlice({
	name: 'orderSendSlice',
	initialState,
	reducers: {
		resetSlice(state) {
			state.page = 1;
			state.sendData = [];
			state.updateData = true;
			state.sendDataEnd = false;
		},
		updateData(state) {
			state.updateData = true;
		}
	},
	extraReducers: {
		[fetchOrdersSendData.fulfilled.type]: (state, action: PayloadAction<{data: IPackageModel[], sendDataEnd: boolean}>) => {
			state.sendData = [...state.sendData, ...action.payload.data];
			state.sendDataEnd = action.payload.sendDataEnd;
			state.page += 1;
			state.updateData = false;
		},
		[fetchDeletePackageInSend.fulfilled.type]: (state, action: PayloadAction<IPackageModel[]>) => {
			state.sendData = action.payload;
		},
		[fetchDeleteTrackNumber.fulfilled.type]: (state, action: PayloadAction<IPackageModel[]>) => {
			state.sendData = action.payload;
		},
	}
});

export default orderSendSlice.reducer;
