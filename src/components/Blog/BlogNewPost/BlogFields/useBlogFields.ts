import {useForm} from 'react-hook-form';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchAddNewsBlog} from '@/reducers/blogSlice/asyncThunk/blogApi';


export interface IPhotoFormState {
	base64: string,
	file: File
}

export interface IFormData {
	blogDescription: string;
	blogTitle: string;
	blogPhoto1: IPhotoFormState;
	blogPhoto2: IPhotoFormState;
	blogPhoto3: IPhotoFormState;
	miniDescPhoto1: string;
	miniDescPhoto2: string;
	miniDescPhoto3: string;
	postLink1: string;
	postLink2: string;
	postLink3: string;
	subtitlePhoto1: string;
	subtitlePhoto2: string;
	subtitlePhoto3: string;
}



export const useBlogFields = () => {

	const dispatch = useAppDispatch();
	const methods = useForm<IFormData>();

	const onSubmit = (data: IFormData) => {
		try {
			dispatch(fetchAddNewsBlog(data));
		} catch (e) {
			throw new Error('Ошибка запроса');
		}
	};

	return {
		methods,
		onSubmit
	};
};
