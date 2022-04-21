import {createAsyncThunk} from '@reduxjs/toolkit';
import {IFormData} from '@/components/Blog/BlogNewPost/BlogFields/useBlogFields';
import {octoAxios} from '@/lib/http';
import axios from 'axios';
import {IBlogModel} from '@/models/IBlogModel';

interface IFetchNewsDataReq {
	page: number
	pageLimit: number;
}

interface IFetchAddNewsRes {
	message: string;
}


interface IFetchNewsDataRes {
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
			formData.append('image', data.blogPhoto1.file);
			formData.append('image', data.blogPhoto2.file);
			formData.append('image', data.blogPhoto3.file);
			formData.append('json_data', sendData);
			const response = await octoAxios
				.post<IFetchAddNewsRes>('/admin/blog', formData)
				.then(r => r.data);
			if (response.message == 'success') {
				return {
					newPost: true,
					title: data.blogTitle,
					body: data.blogDescription,
					createdTime: new Date().toString(),
					editedTime: null,
					id: 0,
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
				return thunkAPI.rejectWithValue(e.response?.status);
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