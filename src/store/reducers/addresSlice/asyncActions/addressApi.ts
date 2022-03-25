import {octoAxios} from '@/lib/http';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUserSlice} from '@/reducers/userSlice/userSlice';
import axios from 'axios';


export interface IUserAddresReq {
	name: string;
	surname: string;
	phone: string;
	location: string;
}

interface IAddressDefaultRes {
	message: string
}

export const fetchAddAddress = async (data: IUserAddresReq) => {
	return (
		// TODO: добавить url
		await octoAxios.post<IAddressDefaultRes>('/', data)
			.then(r => r.data.message)
			.catch(e => e.response)
	);
};

export const fetchDeleteAddress = createAsyncThunk(
	// TODO: добавить url
	'/',
	// TODO: добавитьтип адресса к удалению адреса
	async (data, thunkAPI) => {
		try {
			const response = await octoAxios.get<IAddressDefaultRes>('/', data);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка apu address/delete')
		}
	}
)
