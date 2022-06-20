import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	fetchUserAutoLogin,
	fetchUserLogin,
	fetchUserLogout,
} from '@/reducers/userSlice/asyncActions/userApi';
import { IUserModel } from '@/models/IUserModel';

export interface IUserSlice {
	user: IUserModel;
}

const initialState: IUserSlice = {
	user: {
		id: 0,
		email: '',
		addresses: [],
		lastLoginTime: '',
		personalAreaId: 0,
		statusId: 0,
		name: '',
		photo: '',
		phone: '',
		registrationTime: '',
		surname: '',
		username: '',
		verifiedEmail: false,
		balance: 0,
	},
};

export const userSlice = createSlice({
	name: 'user/info',
	initialState,
	reducers: {
		updateBalance(state, action: PayloadAction<number>) {
			state.user.balance += action.payload;
		},
	},

	extraReducers: {
		[fetchUserLogin.fulfilled.type]: (
			state,
			data: PayloadAction<IUserSlice>
		) => {
			state.user = data.payload.user;
		},
		[fetchUserAutoLogin.fulfilled.type]: (
			state,
			data: PayloadAction<IUserSlice>
		) => {
			state.user = data.payload.user;
		},
		[fetchUserLogout.fulfilled.type]: (state) => {
			state.user = initialState.user;
		},
	},
});

export default userSlice.reducer;
