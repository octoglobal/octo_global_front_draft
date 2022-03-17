import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
	id: 0,
	email: '',
	name: '',
	surname: '',
};

export const userSlice = createSlice({
	name: 'user/info',
	initialState,
	reducers: {},
	extraReducers: {
	},
});

export default userSlice.reducer;
