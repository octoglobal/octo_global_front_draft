import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IBlogModel} from '@/models/IBlogModel';
import { fetchAddNewsBlog, fetchNewsData, fetchUpdateBlog,fetchDeleteBlogItem} from '@/reducers/blogSlice/asyncThunk/blogApi';

interface IEditMode {
	id: number | null,
	open: boolean
}
export interface IError {
	status: boolean,
	message: string,
}

interface IBlogSlice {
	page: number;
	pageLimit: number;
	updatePosts: boolean;
	blogData: IBlogModel[];
	blogEnd: boolean;
	EditMode: IEditMode;
	error:IError,
	loading: boolean
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
	EditMode: {
		id: null,
		open:false
	},
	error:{
		status: false,
		message: ''
	},
	loading: false
};

export const blogSlice = createSlice({
	name: 'blogSlice',
	initialState,
	reducers: {
		updatePosts: (state) => {
			state.updatePosts = true;
		},
		deletePostItem:(state,action)=>{			
			state.blogData = state.blogData.filter((blog) => {
				return blog.id !== action.payload;
			});			
		},
		updateEditMode: (state,action) => {
			state.EditMode.id = action.payload.id;
			state.EditMode.open = action.payload.open;
		},
		updateBlogData: (state,action) => {

			const newData = state.blogData.map(blog=>{
				if (blog.id === action.payload.id){
				
					return {...blog, ...action.payload};
				} 
				return blog;
			});
			state.blogData = newData;
		
			
		},
	},
	extraReducers: {
		[fetchAddNewsBlog.pending.type]: (state) => {
			state.loading = true;
			state.error.status = false;
			state.error.message = '';
		},
		[fetchAddNewsBlog.fulfilled.type]: (state, action: PayloadAction<IBlogModel>) => {
			state.blogData = [ action.payload, ...state.blogData];
			state.loading = false;
		},
		[fetchAddNewsBlog.rejected.type]: (state, action) => {
			
			state.error.status = true;
			state.error.message = action.payload;
			state.loading = false;
			
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
		// [fetchDeleteBlogItem.fulfilled.type]: (state, action) => {
		
		// 	state.blogData = state.blogData.filter((blog) => {
		// 		return blog.id !== action.payload;
		// 	});
		// },	
		[fetchUpdateBlog.pending.type]: (state) => {
			state.error.status = false;
			state.error.message = '';
		  },
		[fetchUpdateBlog.rejected.type]: (state,action) => {			
			state.error.status = true;
			state.error.message = action.payload;
			// state.EditMode.id = null;
			// state.EditMode.open = false;
		},

		[fetchDeleteBlogItem.pending.type]: (state) => {
			state.error.status = false;
			state.error.message = '';
		  },
		[fetchDeleteBlogItem.rejected.type]: (state,action) => {
			
			state.error.status = true;
			state.error.message = action.payload;
		}
		
			
	}
});

export const { deletePostItem,updateEditMode ,updateBlogData} =
blogSlice.actions;

export default blogSlice.reducer;
