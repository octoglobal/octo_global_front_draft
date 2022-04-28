import React, {FC} from 'react';
import BlogPhoto from '@/components/Blog/BlogNewPost/BlogPhoto/BlogPhoto';
import BlogTextField from '@/components/Blog/BlogNewPost/BlogTextField/BlogTextField';
import BlogLink from '@/components/Blog/BlogNewPost/BlogLink/BlogLink';
import {useBlogPreviewFieldsStyles} from '@/components/Blog/BlogNewPost/BlogPreviewFields/style';

interface IBlogPreviewFieldsProps {
	indexField: number,
	
}

const BlogPreviewFields: FC<IBlogPreviewFieldsProps> = ({indexField}) => {
	
	return (
		<ContainerMUI>
			<BlogPhoto
				indexField={indexField}
			
			/>
			<BlogTextField
				name={`subtitlePhoto${indexField}`}
				placeholder='Подзаголовок'
			
			/>
			<BlogTextField
				name={`miniDescPhoto${indexField}`}
				placeholder='Мини-описание'
				
			/>
			<BlogLink
				indexField={indexField}
				
			/>
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = useBlogPreviewFieldsStyles();

export default React.memo(BlogPreviewFields);
