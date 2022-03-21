import axios from 'axios';
import {HOST} from '@/constants/constants';

const octoAxios = axios.create({
	withCredentials: true,
	baseURL: HOST,
});

export {
	octoAxios
};
