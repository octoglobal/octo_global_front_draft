import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import { fetchUsersInAdmin } from '@/reducers/adminSlice/asyncThunk/adminApi';

export interface IAdminHintsData extends IHints{
	userAreaId: null | number,
	email: null | string,
	orderNumber: null | number,
	trackNumber: null | string,
	name: null | string,
	type: 'user' | 'order' | null,
	id: null | number,
	title: string,
}

interface IInitialState {
	adminSwitchIdToUser: null | number;
	search: string;
	hints: IAdminHintsData[]
};

const initialState: IInitialState = {
	adminSwitchIdToUser: 27,
	search: '',
	hints: [],
};

export const adminSlice = createSlice({
	name: 'adminSlice',
	initialState,
	reducers: {
		changeAdminId: (state, action: PayloadAction<number>) => {
			state.adminSwitchIdToUser = action.payload;
			state.hints = [];
		}

	},
	extraReducers: {
		[fetchUsersInAdmin.fulfilled.type]: (state, action: PayloadAction<IAdminHintsData[]>) => {
			state.hints = action.payload;
		}
	}
});

export default adminSlice.reducer;
