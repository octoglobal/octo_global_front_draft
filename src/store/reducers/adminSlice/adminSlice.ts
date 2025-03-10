import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {fetchUserAdmin, fetchUsersInAdmin} from '@/reducers/adminSlice/asyncThunk/adminApi';
import {IUserModel} from '@/models/IUserModel';
import admin from "../../../../pages/admin";

export interface IAdminHintsData extends IHints{
	userAreaId: null | number ,
	email: null | string,
	orderNumber: null | number,
	trackNumber: null | string,
	name: string,
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
			state.hints = [];
    	},
		resetData: (state) => {
			state.hints = [];
			state.adminSwitchIdToUser = null;
			state.search = '';
			state.adminSwitchUserModel = null;
		},
		changeUserBalance: (state, action: PayloadAction<number>) => {
			if (state.adminSwitchUserModel) {
				state.adminSwitchUserModel = {
					...state.adminSwitchUserModel,
					balance: state.adminSwitchUserModel.balance + action.payload,
				};
			}
		},
		changeEmailAndPhone: (state, action: PayloadAction<{phone: string, email: string, name: string, surname: string}>) => {
			if (state.adminSwitchUserModel) {
				state.adminSwitchUserModel = {
					...state.adminSwitchUserModel,
					phone: action.payload.phone,
					email: action.payload.email,
					name: action.payload.name,
					surname: action.payload.surname,
				};
			}
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

export const {changeUserBalance} = adminSlice.actions;

export default adminSlice.reducer;
