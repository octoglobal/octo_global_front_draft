
import {useForm} from 'react-hook-form';
import {useAppDispatch ,useAppSelector} from '@/hooks/useReduxHooks';
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
	const {loading} = useAppSelector(state => state.blogReducer);
	
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
			const isLocalPhoto = PostValue.products[0].photo.match('data:image');
			const src = (count: number) => {
				return isLocalPhoto ? PostValue.products[count].photo : `${HOST}/image/${PostValue.products[count].photo}`;
			};
		
			methods.reset({
				'blogTitle': PostValue.title,
				'postLink1': PostValue.products[0].url,
				'postLink2':  PostValue.products[1].url,
				'postLink3':  PostValue.products[2].url,
				'blogDescription': PostValue.body,
				'blogPhoto1': {base64: src(0), file: undefined },
				'blogPhoto2': {base64: src(1), file: undefined },
				'blogPhoto3': {base64: src(2), file: undefined },
				'miniDescPhoto1': PostValue.products[0].body,
				'miniDescPhoto2': PostValue.products[1].body,
				'miniDescPhoto3': PostValue.products[2].body,
				'subtitlePhoto1':PostValue.products[0].title,
				'subtitlePhoto2':PostValue.products[1].title,
				'subtitlePhoto3':PostValue.products[2].title,

			});
			
		} else {	
			console.log('@@@');
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
		loading,
		onSubmit,
		changeOpenModal
	};
};
