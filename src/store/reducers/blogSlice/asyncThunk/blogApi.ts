import {createAsyncThunk} from '@reduxjs/toolkit';
import {IFormData} from '@/components/Blog/BlogNewPost/BlogFields/useBlogFields';
import {octoAxios} from '@/lib/http';
import axios from 'axios';
import {IBlogModel} from '@/models/IBlogModel';

import { deletePostItem,updateBlogData } from '@/store/reducers/blogSlice/blogSlice';

interface IFetchNewsDataReq {
	page: number
	pageLimit: number;
}

interface IFetchAddNewsRes {
	message: string;
}


export interface IFetchNewsDataRes {
	page_count: number
	posts: IBlogModel[];
}


export const fetchAddNewsBlog = createAsyncThunk(
	'blogSlice/add',
	async (data: IFormData, thunkAPI) => {
		try {
			const formData = new FormData();
			const sendData = JSON.stringify(
				{
					title: data.blogTitle,
					body: data.blogDescription,
					products: [
						{
							title: data.subtitlePhoto1,
							body: data.miniDescPhoto1,
							url: data.postLink1
						},
						{
							title: data.subtitlePhoto2,
							body: data.miniDescPhoto2,
							url: data.postLink2
						},
						{
							title: data.subtitlePhoto3,
							body: data.miniDescPhoto3,
							url: data.postLink3
						},
					]
				}
			);
			formData.append('image', data.blogPhoto1.file as File);
			formData.append('image', data.blogPhoto2.file as File);
			formData.append('image', data.blogPhoto3.file as File);
			formData.append('json_data', sendData);
			const response = await octoAxios
				.post<IFetchAddNewsRes>('/admin/blog', formData)
				.then(r => r.data);

			const response2 = await octoAxios.get<IFetchNewsDataRes>('blog?page=1&page_limit=1');
		
			const newId = response2.data.posts[0].id;
			if (response.message == 'success') {
				return {
					newPost: true,
					title: data.blogTitle,
					body: data.blogDescription,
					createdTime: new Date().toString(),
					editedTime: null,
					id: newId,
					products: [
						{
							title: data.subtitlePhoto1,
							body: data.miniDescPhoto1,
							url: data.postLink1,
							photo:  data.blogPhoto1.base64,
						},
						{
							title: data.subtitlePhoto2,
							body: data.miniDescPhoto2,
							url: data.postLink2,
							photo:  data.blogPhoto2.base64,
						},
						{
							title: data.subtitlePhoto3,
							body: data.miniDescPhoto3,
							url: data.postLink3,
							photo:  data.blogPhoto3.base64,
						},
					]
				};
			}
		} catch (e) {
			if (axios.isAxiosError(e)) {
				// return thunkAPI.rejectWithValue(e.response?.status);
				 return thunkAPI.rejectWithValue('Произошла ошибка при добавлении');
			}
		}
	}
);

export const fetchNewsData = createAsyncThunk(
	'blogSlice/getPosts',
	async (data: IFetchNewsDataReq, thunkAPI) => {
		try {
			const response = await octoAxios.get<IFetchNewsDataRes>(`blog?page=${data.page}&page_limit=${data.pageLimit}`);
			return {
				posts: response.data.posts,
				blogEnd: !(response.data.posts.length === data.pageLimit),
			};
		} catch (e) {
			if (axios.isAxiosError(e)) {
				return thunkAPI.rejectWithValue(e.response?.status);
			}
		}
	}
);

export const fetchDeleteBlogItem = createAsyncThunk(
	'blogSlice/deletePosts',
	async (data: {id: number}, {rejectWithValue, dispatch}) => {
		
		try {		
			const response = await octoAxios.delete('/admin/blog',{ data: { blogId: data.id }});
			if (response.statusText === 'OK'){				
				dispatch(deletePostItem(data.id));				
			}			
	
		} catch (e) {
		
			return rejectWithValue('Произошла ошибка при удалении');
		}
	}
);



export const fetchUpdateBlog = createAsyncThunk(
	'blogSlice/update',
	async (data: {data:IFormData, id:number},{dispatch,rejectWithValue}) => {
		
		try {
			const formData = new FormData();
			const sendData = JSON.stringify(
				{	
					blogId:data.id,
					title: data.data.blogTitle,
					body: data.data.blogDescription,
					products: [
						{
							title: data.data.subtitlePhoto1,
							body: data.data.miniDescPhoto1,
							url: data.data.postLink1
						},
						{
							title: data.data.subtitlePhoto2,
							body: data.data.miniDescPhoto2,
							url: data.data.postLink2
						},
						{
							title: data.data.subtitlePhoto3,
							body: data.data.miniDescPhoto3,
							url: data.data.postLink3
						},
					]
				}
			);

					
			formData.append('json_data', sendData);
			const response = await octoAxios.patch('/admin/blog', formData);

				
			if (response.statusText === 'OK'){				
				
				const updateData = {	
					id:data.id,
					title: data.data.blogTitle,
					body: data.data.blogDescription,
					
					products: [
						{
							title: data.data.subtitlePhoto1,
							body: data.data.miniDescPhoto1,
							url: data.data.postLink1,
							// photo: data.data.blogPhoto1.base64.split('/image')[1].substring(1),
							photo: data.data.blogPhoto1.base64,
							
							
						},
						{
							title: data.data.subtitlePhoto2,
							body: data.data.miniDescPhoto2,
							url: data.data.postLink2,
							photo: data.data.blogPhoto2.base64
						},
						{
							title: data.data.subtitlePhoto3,
							body: data.data.miniDescPhoto3,
							url: data.data.postLink3,
							photo: data.data.blogPhoto3.base64
						},
					]
				};
			
				dispatch(updateBlogData(updateData));
				
			}
			
		} catch (error) {	
			console.log(error);
			
			return rejectWithValue('Произошла ошибка при обновлении',);
		}
	}
);