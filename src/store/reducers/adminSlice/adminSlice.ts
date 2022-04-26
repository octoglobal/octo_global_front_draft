import {createSlice} from '@reduxjs/toolkit';
import {IHints} from '@/components/AnyPage/CategorySearch/types';

interface IInitialState {
	adminSwitchIdToUser: null | number;
	search: string;
	hints: IHints[];
};

const initialState: IInitialState = {
	adminSwitchIdToUser: 27,
	search: '',
	hints: [],
};

export const adminSlice = createSlice({
	name: 'adminSlice',
	initialState,
	reducers: {},
	extraReducers: {}
});

export default adminSlice.reducer;
