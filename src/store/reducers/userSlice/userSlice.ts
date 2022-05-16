import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	fetchUserAutoLogin,
	fetchUserLogin,
	fetchUserLogout,	
} from '@/reducers/userSlice/asyncActions/userApi';
import {IUserModel} from '@/models/IUserModel';

export interface IUserSlice {
	user: IUserModel,
	
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
		verifiedEmail: false
	},
	
	
};

export const userSlice = createSlice({
	name: 'user/info',
	initialState,
	reducers: {},
	// extraReducers: (builder) => {
	extraReducers: {
		// builder.addCase(fetchUserLogin.fulfilled, (state, data: PayloadAction<IUserSlice>) => {
		// 	state.user = data.payload.user;
		// });
		// builder
		// 	.addCase(fetchUserAutoLogin.pending, (state) => {
		// 		state.loading = true;
		// 	})
		// 	.addCase(fetchUserAutoLogin.fulfilled, (state, data: PayloadAction<IUserSlice>) => {
		// 		console.log('fetchUserAutoLogin-data: ', data);
		// 		state.user = {
		// 			...state.user,
		// 			...data.payload.user
		// 		};
		// 		state.loading = false;
		// 	});
		// builder.addCase(fetchUserLogout.fulfilled, (state) => {
		// 	state.user = initialState.user;
		// 	state.loading = false;
		// });
		[fetchUserLogin.fulfilled.type]: (state, data: PayloadAction<IUserSlice>) => {
			state.user = data.payload.user;
		},
		[fetchUserAutoLogin.fulfilled.type]: (state, data: PayloadAction<IUserSlice>) => {
			state.user = data.payload.user;
		},
		[fetchUserLogout.fulfilled.type]: (state) => {
			state.user = initialState.user;
		},
	},
});

export default userSlice.reducer;
