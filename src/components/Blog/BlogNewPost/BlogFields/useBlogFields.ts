
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchAddNewsBlog,fetchUpdateBlog} from '@/reducers/blogSlice/asyncThunk/blogApi';


export interface IPhotoFormState {
	base64: string,
	file: File | undefined
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



export const useBlogFields = (edit:number) => {

	const dispatch = useAppDispatch();
	const methods = useForm<IFormData>();

	const onSubmit = (data: IFormData) => {
		
		if (edit){
			
			try {
				
				dispatch(fetchUpdateBlog({data: data,id:edit}));
			} catch (e) {
				throw new Error('Ошибка запроса');
			}
		} else {
			try {
				dispatch(fetchAddNewsBlog(data)).then(r => {
					if (r.type === 'blogSlice/add/fulfilled') {
						methods.reset({});
						window.scrollTo({
							behavior: 'smooth',
							top: 0
						});
					}
				});
			} catch (e) {
				throw new Error('Ошибка запроса');
			}
		}
		
	};

	return {
		methods,
		onSubmit
	};
};
