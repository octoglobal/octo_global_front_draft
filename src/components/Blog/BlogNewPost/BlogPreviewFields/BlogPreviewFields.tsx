import React, {FC} from 'react';
import BlogPhoto from '@/components/Blog/BlogNewPost/BlogPhoto/BlogPhoto';
import BlogTextField from '@/components/Blog/BlogNewPost/BlogTextField/BlogTextField';
import BlogLink from '@/components/Blog/BlogNewPost/BlogLink/BlogLink';
import {useBlogPreviewFieldsStyles} from '@/components/Blog/BlogNewPost/BlogPreviewFields/style';

interface IBlogPreviewFieldsProps {
	indexField: number,
	product: object[],
}

const BlogPreviewFields: FC<IBlogPreviewFieldsProps> = ({indexField,product={}}) => {
	
	return (
		<ContainerMUI>
			<BlogPhoto
				indexField={indexField}
				// photoReady={product.photo}
			/>
			<BlogTextField
				name={`subtitlePhoto${indexField}`}
				placeholder='Подзаголовок'
				value={product.body}
			/>
			<BlogTextField
				name={`miniDescPhoto${indexField}`}
				placeholder='Мини-описание'
				value={product.title}
			/>
			<BlogLink
				indexField={indexField}
				value={product.url}
			/>
		</ContainerMUI>
	);
};

const {
	ContainerMUI
} = useBlogPreviewFieldsStyles();

export default React.memo(BlogPreviewFields);
