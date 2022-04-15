import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
	fetchAllTagsShops,
	fetchMoreTagShops,
	fetchSearchShops,
	fetchTagShops
} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {IShopsModel} from '@/models/IShopsModel';
import {ICategoryItem} from '@/components/Shops/type';
import {ICategoryModel} from '@/models/ICategoryModel';

export interface IShopsSlice {
	search: string;
	page: number;
	tags: string;
	shops: IShopsModel[];
	error: string;
	updateShops: boolean
	shopsEnd: boolean;
	allTags: ICategoryItem[]
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
	allTags: [],
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
		[fetchSearchShops.fulfilled.type]: (state, action: PayloadAction<IFetchSearchShopsFulfilled>) => {
			state.shops = action.payload.shops;
			state.page = 1;
			state.updateShops = false;
			state.search = action.payload.search;
		},
		[fetchSearchShops.pending.type]: (state) => {
			state.updateShops = true;
		},
		[fetchSearchShops.rejected.type]: (state) => {
			state.updateShops = false;
			state.error = 'error';
		},
		[fetchTagShops.fulfilled.type]: (state, action: PayloadAction<IFetchMoreTagShopsFulfilled>) => {
			state.shops = action.payload.shops;
			state.shopsEnd = action.payload.shopsEnd;
			state.page = 2;
			state.updateShops = false;
			state.tags = action.payload.tags;
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
