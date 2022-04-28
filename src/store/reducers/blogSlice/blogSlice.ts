import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {IBlogModel} from '@/models/IBlogModel';
import { fetchAddNewsBlog, fetchNewsData, fetchDeleteBlogItem,fetchUpdateBlog} from '@/reducers/blogSlice/asyncThunk/blogApi';

interface IEditMode {
	id: number,
	open: boolean
}


interface IBlogSlice {
	page: number;
	pageLimit: number;
	updatePosts: boolean;
	blogData: IBlogModel[];
	blogEnd: boolean;
	EditMode: IEditMode;
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
	}
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
		// [fetchDeleteBlogItem.fulfilled.type]: (state, action) => {
		
		// 	state.blogData = state.blogData.filter((blog) => {
		// 		return blog.id !== action.payload;
		// 	});
		// },	
		
		
			
	}
});

export const { deletePostItem,updateEditMode ,updateBlogData} =
blogSlice.actions;

export default blogSlice.reducer;
