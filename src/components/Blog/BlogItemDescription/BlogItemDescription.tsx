import React, {FC} from 'react';
import {useBlogItemDescriptionStyles} from '@/components/Blog/BlogItemDescription/style';

interface IBlogItemDescriptionProps {
	description: string
}

const BlogItemDescription: FC<IBlogItemDescriptionProps> = ({description}) => {
	return (
		<PreMUI>
			{description}
		</PreMUI>
	);
};

const {
	PreMUI
} = useBlogItemDescriptionStyles();


export default React.memo(BlogItemDescription);
