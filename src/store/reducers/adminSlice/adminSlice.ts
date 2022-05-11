import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {fetchUserAdmin, fetchUsersInAdmin} from '@/reducers/adminSlice/asyncThunk/adminApi';
import {IUserModel} from '@/models/IUserModel';

export interface IAdminHintsData extends IHints{
	userAreaId: null | number ,
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
	adminSwitchUserModel: IUserModel | null;
};

const initialState: IInitialState = {
	adminSwitchIdToUser: null,
	search: '',
	hints: [],
	adminSwitchUserModel: null,
};

export const adminSlice = createSlice({
	name: 'adminSlice',
	initialState,
	reducers: {
		changeAdminId: (state, action: PayloadAction<number>) => {
			state.adminSwitchIdToUser = action.payload;
			state.hints = [];
		},
		clearAdminHints: (state) => {
			console.log('dfdfdf очистка');	
			state.hints = [];
		}

	},
	extraReducers: {
		[fetchUsersInAdmin.fulfilled.type]: (state, action: PayloadAction<IAdminHintsData[]>) => {
			state.hints = action.payload;
		},
		[fetchUserAdmin.fulfilled.type]: (state, action: PayloadAction<IUserModel>) => {
			state.adminSwitchUserModel = action.payload;
		},
	}
});

export default adminSlice.reducer;
