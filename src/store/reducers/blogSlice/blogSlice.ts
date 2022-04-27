import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {IBlogModel} from '@/models/IBlogModel';
import { fetchAddNewsBlog, fetchNewsData,fetchDeleteBlogItem } from '@/reducers/blogSlice/asyncThunk/blogApi';

interface IBlogSlice {
	page: number;
	pageLimit: number;
	updatePosts: boolean;
	blogData: IBlogModel[];
	blogEnd: boolean;
};

interface IFetchNewsFulfilled {
	posts: IBlogModel[],
	blogEnd: boolean
};


const initialState: IBlogSlice = {
	page: 1,
	pageLimit: 50,
	updatePosts: false,
	blogData: [],
	blogEnd: false,
};

export const blogSlice = createSlice({
	name: 'blogSlice',
	initialState,
	reducers: {
		updatePosts: (state) => {
			state.updatePosts = true;
		},
		deletePostItem:(state,action)=>{
			console.log('dfdfdfd');
			state.blogData = state.blogData.filter((blog) => {
				return blog.id !== action.payload;
			});
		
			
		}
	},
	extraReducers: {
		[fetchAddNewsBlog.fulfilled.type]: (state, action: PayloadAction<IBlogModel>) => {
			state.blogData = [ action.payload, ...state.blogData];
		},
		[fetchNewsData.fulfilled.type]: (state, action: PayloadAction<IFetchNewsFulfilled>) => {
			state.blogEnd = action.payload.blogEnd;
			state.updatePosts = false;
			state.page += 1;
			if (state.blogData.length) {
				state.blogData = [ ...state.blogData, ...action.payload.posts];
			} else {
				state.blogData = [...action.payload.posts];
			}
		},	
			
	}
});

export const { deletePostItem } =
blogSlice.actions;

export default blogSlice.reducer;
