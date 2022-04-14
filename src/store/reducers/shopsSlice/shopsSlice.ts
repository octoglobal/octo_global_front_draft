import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchMoreTagShops, fetchSearchShops, fetchTagShops} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {IShopsModel} from '@/models/IShopsModel';

export interface IShopsSlice {
	search: string;
	page: number;
	tags: string;
	shops: IShopsModel[];
	error: string;
	updateShops: boolean
	shopsEnd: boolean;
}

interface IFetchMoreTagShopsFulfilled {
	shops: IShopsModel[];
	shopsEnd: boolean;
	tags: string;
}

interface IFetchSearchShopsFulfilled {
	shops: IShopsModel[],
	search: string
}

const initialState: IShopsSlice = {
	search: '',
	shops: [],
	page: 1,
	tags: '',
	updateShops: true,
	shopsEnd: false,
	error: '',
};

export const shopSlice = createSlice({
	name: 'shopsSlice/info',
	initialState,
	reducers: {
		changeSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		updatePost(state) {
			state.updateShops = true;
		},
		resetSlice(state) {
			state.search = '';
			state.shops = [];
			state.page = 1;
			state.page = 1;
			state.tags = '';
			state.updateShops = true;
			state.shopsEnd = false;
			state.error = '';
		},
	},
	extraReducers: {
		[fetchSearchShops.fulfilled.type]: (state, data: PayloadAction<IFetchSearchShopsFulfilled>) => {
			state.shops = data.payload.shops;
			state.page = 1;
			state.updateShops = false;
			state.search = data.payload.search;
		},
		[fetchSearchShops.pending.type]: (state) => {
			state.updateShops = true;
		},
		[fetchSearchShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
		[fetchTagShops.fulfilled.type]: (state, data: PayloadAction<IFetchMoreTagShopsFulfilled>) => {
			state.shops = data.payload.shops;
			state.shopsEnd = data.payload.shopsEnd;
			state.page = 2;
			state.updateShops = false;
			state.tags = data.payload.tags;
		},
		[fetchTagShops.pending.type]: (state) => {
			state.search = '';
		},
		[fetchTagShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
		[fetchMoreTagShops.fulfilled.type]: (state, data: PayloadAction<IFetchMoreTagShopsFulfilled>) => {
			state.shops = [...state.shops, ...data.payload.shops];
			state.updateShops = data.payload.shopsEnd;
			state.page += 1;
			state.shopsEnd = false;
			state.tags = data.payload.tags;
		},
		[fetchMoreTagShops.pending.type]: (state) => {
			state.updateShops = true;
			state.search = '';
		},
		[fetchMoreTagShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
	}
});

export default shopSlice.reducer;
