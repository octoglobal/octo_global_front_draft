import axios from 'axios';
import {HOST} from '@/constants/constants';

const octoAxios = axios.create({
	baseURL: HOST
});

export {
	octoAxios
};
