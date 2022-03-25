import {octoAxios} from '@/lib/http';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUserSlice} from '@/reducers/userSlice/userSlice';
import axios from 'axios';

export interface IUserRegistrationReq {
	name: string;
	email: string;
	surname: string;
	password: string;
	confirmPassword: string;
}

export interface IUserLoginReq {
	email: string;
	password: string;
}
interface IUserDefaultRes {
	message: string
}

export const fetchUserRefresh = async () => {
	try {
		const response = await octoAxios.get('/refresh');
		return response.data;
	} catch (err: unknown) {
		if (axios.isAxiosError(err)) {
			return err.response?.status;
		}
		return 400;
	}
};

export const fetchUserRegistration = async (data: IUserRegistrationReq) => {
	return (
		await octoAxios.post<IUserDefaultRes>('/registration', data)
			.then(r => r.data.message)
			.catch(e => e.response)
	);
};

export const fetchUserLogout = createAsyncThunk(
	'user/logout',
	async (__, thunkAPI) => {
		try {
			const response = await octoAxios.get<IUserDefaultRes>('/logout');
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка api user/logout');
		}
	}
);

export const fetchUserAutoLogin = createAsyncThunk(
	'user/autologin',
	async (__, thunkAPI) => {
		try {
			const response = await octoAxios.get('/user');
			return response.data;
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(`Ошибка api user/autologin 400 ${err.response?.status}`);
			}
			return thunkAPI.rejectWithValue('Ошибка api user/autologin 400');
		}
	}
);

export const fetchUserLogin = createAsyncThunk(
	'user/login',
	async (data: IUserLoginReq, thunkAPI) => {
		try {
			const response = await octoAxios.get<IUserSlice>('/login', {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Authorization': `Basic ${window.btoa(`${data.email}:${data.password}`)}`
				}
			});
			console.log(response);
			return response.data;
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(err.response?.status);
			}
			return thunkAPI.rejectWithValue(422);
		}
	}
);
