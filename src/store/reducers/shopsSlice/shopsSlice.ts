import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchSearchShops} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {IShopsModel} from '@/models/IShopsModel';

export interface IShopsSlice {
	search: string;
	shops: IShopsModel[];
}

const initialState: IShopsSlice = {
	search: '',
	shops: [],
};

export const shopSlice = createSlice({
	name: 'shopsSlice/info',
	initialState,
	reducers: {
		changeSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		}
	},
	extraReducers: {
		[fetchSearchShops.fulfilled.type]: (state, data: PayloadAction<IShopsModel[]>) => {
			state.shops = data.payload;
		}
	}
});

export default shopSlice.reducer;
