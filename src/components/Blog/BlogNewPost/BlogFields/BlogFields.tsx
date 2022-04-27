import React, {FC, useEffect, useState} from 'react';
import {useBlogFieldsStyles} from '@/components/Blog/BlogNewPost/BlogFields/style';
import { FormProvider } from 'react-hook-form';
import BlogPreviewFields from '@/components/Blog/BlogNewPost/BlogPreviewFields/BlogPreviewFields';
import BlogDescription from '@/components/Blog/BlogNewPost/BlogDescription/BlogDescription';
import BlogTitle from '@/components/Blog/BlogNewPost/BlogTitle/BlogTitle';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useBlogFields} from '@/components/Blog/BlogNewPost/BlogFields/useBlogFields';

import { useAppSelector } from '@/hooks/useReduxHooks';


interface IBlogFieldsProps {
	open: boolean
}


const BlogFields: FC<IBlogFieldsProps> = ({open}) => {
	const [EditPostValue, setEditPostValue] = useState({products: []});

	const { blogData,EditMode } = useAppSelector(state => state.blogReducer);
	const {
		methods,
		onSubmit
		
	} = useBlogFields(EditMode.id);//нужен аргумент едит что бы отредоктировать а не создать
	
	useEffect(()=>{
		if (EditMode.id){
			
			const PostValue = blogData.filter(post=>post.id === EditMode.id)[0];
			setEditPostValue(PostValue);			
		} else {
			setEditPostValue({products: []});
		}
		
	},[EditMode]);



	return (
		<ContainerMUI>
			<CollapseMUI in={open}>
				<FormProvider {...methods}>
					<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
						<BlogTitle
						 value={EditPostValue.title}
						   />
						<WrapperMUI>
							<BlogPreviewFields indexField={1} product={EditPostValue.products[0]}/>
							<BlogPreviewFields indexField={2} product={EditPostValue.products[1]}/>
							<BlogPreviewFields indexField={3} product={EditPostValue.products[2]}/>
						</WrapperMUI>
						<BlogDescription
						 body={EditPostValue.body}
						 />
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
