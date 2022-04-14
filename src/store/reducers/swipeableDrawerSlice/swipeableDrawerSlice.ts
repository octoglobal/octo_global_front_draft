import {createSlice} from '@reduxjs/toolkit';

export interface ISwipeableDrawerSlice {
	open: boolean
}

const initialState : ISwipeableDrawerSlice = {
	open: false,
};

export const swipeableDrawerSlice = createSlice({
	name: 'swipebleableDrawer',
	initialState,
	reducers: {
		toggleDrawer : (state, action) => {
			if(action.payload) {
				state.open = action.payload;
			}else {
				state.open = !state.open;
			}
		}
	}
});

export const {toggleDrawer} = swipeableDrawerSlice.actions;

export default swipeableDrawerSlice.reducer;
