import { createSlice } from '@reduxjs/toolkit';
import {IAddressModel} from '@/models/IAddressModel';

export interface IAddressSlice {
	address: Array<IAddressModel>
}

const initialState: IAddressSlice = {
	address: []
};

export const addressSlice = createSlice({
	name: 'address/slice',
	initialState,
	reducers: {},
	extraReducers: {

	}
});
