import React, {FC, useEffect} from 'react';
import {useBlogFieldsStyles} from '@/components/Blog/BlogNewPost/BlogFields/style';
import { FormProvider } from 'react-hook-form';
import BlogPreviewFields from '@/components/Blog/BlogNewPost/BlogPreviewFields/BlogPreviewFields';
import BlogDescription from '@/components/Blog/BlogNewPost/BlogDescription/BlogDescription';
import BlogTitle from '@/components/Blog/BlogNewPost/BlogTitle/BlogTitle';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useBlogFields} from '@/components/Blog/BlogNewPost/BlogFields/useBlogFields';
import { HOST } from '@/constants/constants';

import { useAppSelector } from '@/hooks/useReduxHooks';





const BlogFields: FC = ({open}) => {
	const { blogData,EditMode } = useAppSelector(state => state.blogReducer);
	const {
		methods,
		onSubmit
		
	} = useBlogFields(EditMode.id);//нужен аргумент едит что бы отредоктировать а не создать
	
	useEffect(()=>{
		if (EditMode.id){
			
			const PostValue = blogData.filter(post=>post.id === EditMode.id)[0];
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

			});
		} 
		
	},[EditMode]);

	// console.log('watch',methods.watch());




	return (
		<ContainerMUI>
			<CollapseMUI in={open}>
				<FormProvider {...methods}>
					<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
						<BlogTitle/>
						<WrapperMUI>
							<BlogPreviewFields indexField={1}/>
							<BlogPreviewFields indexField={2} />
							<BlogPreviewFields indexField={3} />
						</WrapperMUI>
						<BlogDescription/>
						<ButtonContainerMUI>
							<ButtonUI type='submit'>
								{EditMode.id ? 'Изменить':'Сохранить'}
								
							</ButtonUI>
							
						</ButtonContainerMUI>
					</FormMUI>
				</FormProvider>
			</CollapseMUI>
		</ContainerMUI>
	);
};

const {
	FormMUI,
	WrapperMUI,
	CollapseMUI,
	ContainerMUI,
	ButtonContainerMUI
} = useBlogFieldsStyles();

export default React.memo(BlogFields);
