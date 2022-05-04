
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchAddNewsBlog,fetchUpdateBlog} from '@/reducers/blogSlice/asyncThunk/blogApi';
import { useState,useEffect } from 'react';
import { HOST } from '@/constants/constants';
import {IBlogModel} from '@/models/IBlogModel';
import { IError } from '@/store/reducers/blogSlice/blogSlice';

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



export const useBlogFields = (edit:number,blogData:IBlogModel[],error:IError) => {
	const [openModal, setOpenModal] = useState(false);
	const dispatch = useAppDispatch();
	const methods = useForm<IFormData>();

	const onSubmit = (data: IFormData) => {
		
		if (edit){			
			try {
				dispatch(fetchUpdateBlog({data: data,id:edit}));
				methods.reset({
					'blogPhoto1': {},
					'blogPhoto2': {},
					'blogPhoto3': {},
				});
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
	const  changeOpenModal = ()=> {	
		setOpenModal(false);
	};


	useEffect(()=>{
		if (edit){			
			const PostValue = blogData.filter(post=>post.id === edit)[0];
		
			methods.reset({
				'blogTitle': PostValue.title,
				'postLink1': PostValue.products[0].url,
				'postLink2':  PostValue.products[1].url,
				'postLink3':  PostValue.products[2].url,
				'blogDescription': PostValue.body,
				'blogPhoto1': {base64: `${HOST}/image/${PostValue.products[0].photo}`, file: undefined },
				'blogPhoto2': {base64: `${HOST}/image/${PostValue.products[1].photo}`, file: undefined },
				'blogPhoto3': {base64: `${HOST}/image/${PostValue.products[2].photo}`, file: undefined },
				'miniDescPhoto1': PostValue.products[0].body,
				'miniDescPhoto2': PostValue.products[1].body,
				'miniDescPhoto3': PostValue.products[2].body,
				'subtitlePhoto1':PostValue.products[0].title,
				'subtitlePhoto2':PostValue.products[1].title,
				'subtitlePhoto3':PostValue.products[2].title,

			});
			
		} else {	
				
			methods.reset({
				'blogPhoto1': {},
				'blogPhoto2': {},
				'blogPhoto3': {},
			});
		} 
		
	},[edit]);

	useEffect(()=>{
		if (error.status){
			setOpenModal(true);
		}
		
	},[error]);

	return {
		methods,
		openModal,
		onSubmit,
		changeOpenModal
	};
};
