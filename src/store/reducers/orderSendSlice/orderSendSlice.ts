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
}

const initialState: IOrderSendState = {
	page: 1,
	pageLimit: 50,
	sendData: [],
	updateData: true,
};

export const orderSendSlice = createSlice({
	name: 'orderSendSlice',
	initialState,
	reducers: {
		resetSlice(state) {
			state.page = 1;
			state.sendData = [];
			state.updateData = true;
		}
	},
	extraReducers: {
		[fetchOrdersSendData.fulfilled.type]: (state, action: PayloadAction<IPackageModel[]>) => {
			state.sendData = [...state.sendData, ...action.payload];
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
