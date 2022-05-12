import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	fetchAllTagsShops, fetchHintsSearchShops,
	fetchMoreTagShops,
	fetchSearchShops,
	fetchTagShops
} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {ICategoryModel} from '@/models/ICategoryModel';
import {IHints} from '@/components/AnyPage/CategorySearch/types';
import {
	IFetchMoreTagShopsFulfilled,
	IFetchSearchShopsFulfilled,
	ISearchNullShopsSlice, IShopsSlice
} from '@/reducers/shopsSlice/type';

const initialState: IShopsSlice = {
	search: '',
	shops: [],
	page: 1,
	tags: '',
	updateShops: true,
	shopsEnd: false,
	error: '',
	allTags: [],
	searchHints: [],
	isNotFoundShops: false,
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
		changeFoundShops(state, action: PayloadAction<boolean>) {
			state.isNotFoundShops = action.payload;
		},
		changeHintsShops(state, action: PayloadAction<IHints[]>) {			
			state.searchHints = action.payload;
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
		[fetchHintsSearchShops.fulfilled.type]: (state, action: PayloadAction<IHints[]>) => {
			state.searchHints = action.payload;
		},
		[fetchSearchShops.fulfilled.type]: (state, action: PayloadAction<IFetchSearchShopsFulfilled>) => {
			state.shops = action.payload.shops;
			state.page = 1;
			state.updateShops = false;
			state.search = action.payload.search;
			state.isNotFoundShops = false;
		},
		[fetchSearchShops.pending.type]: (state) => {
			state.updateShops = true;
		},
		[fetchSearchShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
		[fetchTagShops.fulfilled.type]: (state, action: PayloadAction<IFetchMoreTagShopsFulfilled & ISearchNullShopsSlice>) => {
			state.shops = action.payload.shops;
			state.shopsEnd = action.payload.shopsEnd;
			state.page = 2;
			state.updateShops = false;
			state.tags = action.payload.tags;
			state.isNotFoundShops = action.payload.isSearchNotFound;
			state.search = '';
		},
		[fetchTagShops.pending.type]: (state) => {
			state.search = '';
		},
		[fetchTagShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
		[fetchMoreTagShops.fulfilled.type]: (state, action: PayloadAction<IFetchMoreTagShopsFulfilled>) => {
			state.shops = [...state.shops, ...action.payload.shops];
			state.updateShops = action.payload.shopsEnd;
			state.page += 1;
			state.shopsEnd = false;
			state.tags = action.payload.tags;
		},
		[fetchMoreTagShops.pending.type]: (state) => {
			state.updateShops = true;
			state.search = '';
		},
		[fetchMoreTagShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
		[fetchAllTagsShops.fulfilled.type]: (state, action: PayloadAction<ICategoryModel[]>) => {
			state.allTags = action.payload;
		}
	}
});

export default shopSlice.reducer;
