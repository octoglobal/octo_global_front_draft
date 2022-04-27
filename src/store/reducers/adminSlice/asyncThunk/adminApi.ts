import { createAsyncThunk } from '@reduxjs/toolkit';
import { octoAxios } from '@/lib/http';
import {
	ISearchAdminModelData,
} from '@/models/ISearchAdminModel';
import { generateAdminHintsData } from '@/services/services';

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
