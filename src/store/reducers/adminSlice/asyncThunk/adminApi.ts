import { createAsyncThunk } from '@reduxjs/toolkit';
import { octoAxios } from '@/lib/http';
import {
	ISearchAdminModelData,
} from '@/models/ISearchAdminModel';
import { generateAdminHintsData } from '@/services/services';
import {IUserModel} from '@/models/IUserModel';

interface IFetchUsersInAdminData {
	text: string;
}


export const fetchUsersInAdmin = createAsyncThunk(
	'adminSlice/search',
	async (data: IFetchUsersInAdminData, thunkAPI) => {
		try {
			const response = await octoAxios.get<ISearchAdminModelData>(
				'/admin/search',
				{params: { text: data.text }}
			);
			return generateAdminHintsData(response.data.search_results);
		} catch (e) {
			thunkAPI.rejectWithValue('Error api admin search');
		}
	}
);

export const fetchUserAdmin = createAsyncThunk(
	'adminSlice/user',
	async (data: {userId: number}, thunkAPI) => {
		try {
			const response = await octoAxios.get<{user: IUserModel}>(`/admin/user/${data.userId}`)
				.then(r => r.data.user);
			return response;
		} catch (e) {
			thunkAPI.rejectWithValue('error adminSlice/user');
		}
	}
);
