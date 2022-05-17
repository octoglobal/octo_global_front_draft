import {octoAxios} from '@/lib/http';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUserSlice} from '@/reducers/userSlice/userSlice';
import axios from 'axios';
import {AddressFetchObject, IRecoveryMessage, ISendRecoveryPass, IUpdatePassword} from '../../../../types/types';

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
export interface IUserChange {
	name?: string;
	surname?: string;
	phone?: string;
}
interface IUserDefaultRes {
	message: string
}

export interface IUserAddresReq {
	name: string;
	surname: string;
	phone: string;
	address: string;
}

interface IAddressDelete {
	address_id: number,
	userId?:number
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

export const fetchVerificMessage = async () => {
	try {
		const response = await octoAxios.get('/send_verification_message');
		// console.log(response);
		return response.data;
	} catch (err: unknown) {
		if (axios.isAxiosError(err)) {
			// throw err;
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
		console.log('auto login');
		try {
			const response = await octoAxios.get('/user');
			// console.log('пошел запрос: ', response.data);
			return response.data;
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return {
					message: thunkAPI.rejectWithValue(`${err.response?.status}`),
				};
			}
			return thunkAPI.rejectWithValue('422');
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
			return response.data;
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(err.response?.status);
			}
			return thunkAPI.rejectWithValue(422);
		}
	}
);

export const fetchChangeUser = createAsyncThunk(
	'user/change',
	async(data: {data: IUserChange, url: string}, thunkAPI) => {
		try {
			return await octoAxios.patch(data.url, data.data);
		} catch (err : unknown) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(err.response);
			}
			return thunkAPI.rejectWithValue(400);
		}
	}
);

export const fetchChangePassword = createAsyncThunk(
	'password/chang',
	async(data : {data: IUpdatePassword | {password: string}, url: string, isAdmin: boolean}, thunkAPI) => {
		try {
			if (data.isAdmin) {
				return await octoAxios.patch(data.url, data.data);
			} else {
				return await octoAxios.post(data.url, data.data);
			}
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(err.response?.status);
			}
			return thunkAPI.rejectWithValue(400);
		}
	}
);

export const fetchRecoveryPassword = createAsyncThunk(
	'password/recovery',
	async(data : ISendRecoveryPass, thunkAPI) => {
		try {
			const dataSend = {
				password: data.password
			};
			return await octoAxios.post('/password_recovery', dataSend, {
				headers: {
					'Authorization': `Bearer ${data.token}`
				}
			});
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(err.response?.status);
			}
			return thunkAPI.rejectWithValue(400);
		}
	}
);

export const fetchRecoveryMessage = createAsyncThunk(
	'user/send_recovery_message',
	async(data : IRecoveryMessage, thunkAPI) => {
		try {
			return await octoAxios.post('/send_recovery_message', data);
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				return thunkAPI.rejectWithValue(err.response?.status);
			}
			return thunkAPI.rejectWithValue(422);
		}
	}
);

export const fetchAddAddress = createAsyncThunk(
	'address/add',
	async(data: AddressFetchObject, {rejectWithValue}) => {
		try {		
			const response = await octoAxios.post('/user/address', data);

			// console.log('response: ', response);
			return response;
		} catch (err) {
			
			if (axios.isAxiosError(err)) {
			
				return rejectWithValue(err.response?.status);
			}
		
		}
	}
);

export const fetchDeleteAddress = createAsyncThunk(
	'/address/delete',
	// TODO: добавитьтип адресса к удалению адреса	
	async (data: IAddressDelete, thunkAPI) => {		
		try {
			// console.log('data: ', data);
			const response = await octoAxios.delete('/user/address', {data});
			// console.log('response: ', response);
			// const response
			return response;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка apu address/delete');
		}
	}
);
export const fetchDeleteAddressAdmin = createAsyncThunk(
	'/address/AdminDeleteUser',
	// TODO: добавитьтип адресса к удалению адреса
	
	async (data: IAddressDelete, thunkAPI) => {
		console.log('DELETE ', data);
		try {			
			const response = await octoAxios.delete('/admin/user/address', {data});
			// console.log('response: ', response);
			// const response
			return response;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка apu address/delete');
		}
	}
);


export const fetchAddAddressAdminForUser = createAsyncThunk(
	'/address/AdminDeleteUser',
	// TODO: добавитьтип адресса к удалению адреса
	
	async (data: IAddressDelete, thunkAPI) => {

		// {
		// 	"userId": 1,
		// 	"name": "borya", 
		// 	"surname": "razaty",
		// 	"address_string": "chelyabinsk, dom 5",
		// 	"phone": "+7123123123",
		// 	"latitude": "4.5321",
		// 	"longitude": "98.7456"
		// }
		console.log('ADD post admin for user ', data);
		try {			
			const response = await octoAxios.post('/admin/user/address', data);
			console.log('response: ', response);
			
			return response;
		} catch (e) {
			return thunkAPI.rejectWithValue('Ошибка api /admin/user/address');
		}
	}
);