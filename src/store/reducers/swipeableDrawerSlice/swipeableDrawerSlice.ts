import {createSlice} from '@reduxjs/toolkit';

export interface ISwipeableDrawerSlice {
	open: boolean,
	openTab: string
}

const initialState : ISwipeableDrawerSlice = {
	open: false,
	openTab: '',
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
		},
		toggleTab : (state, action) => {
			state.openTab = action.payload;
		}
	}
});

export const {toggleDrawer, toggleTab} = swipeableDrawerSlice.actions;

export default swipeableDrawerSlice.reducer;
