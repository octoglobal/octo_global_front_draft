import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUserAutoLogin, fetchUserLogin, fetchUserLogout} from '@/reducers/userSlice/asyncActions/userApi';
import {IUserModel} from '@/models/IUserModel';

export interface IUserSlice {
	user: IUserModel,
}

const initialState: IUserSlice = {
	user: {
		id: 0,
		email: '',
		lastLoginTime: '',
		name: '',
		photo: '',
		registrationTime: '',
		surname: '',
		username: '',
		verifiedEmail: false
	}
};

export const userSlice = createSlice({
	name: 'user/info',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUserLogin.fulfilled.type]: (state, data: PayloadAction<IUserSlice>) => {
			state.user = data.payload.user;
		},
		[fetchUserAutoLogin.fulfilled.type]: (state, data: PayloadAction<IUserSlice>) => {
			state.user = data.payload.user;
		},
		[fetchUserLogout.fulfilled.type]: (state) => {
			state.user = {
				id: 0,
				email: '',
				lastLoginTime: '',
				name: '',
				photo: '',
				registrationTime: '',
				surname: '',
				username: '',
				verifiedEmail: false
			};
		}
	},
});

export default userSlice.reducer;
