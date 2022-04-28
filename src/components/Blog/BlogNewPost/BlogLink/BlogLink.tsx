import React, {FC} from 'react';
import {useBlogLinkStyles} from '@/components/Blog/BlogNewPost/BlogLink/style';
import {useFormContext} from 'react-hook-form';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

interface IBlogLinkProps {
	indexField: number;

};

const BlogLink: FC<IBlogLinkProps> = ({indexField}) => {

	const { control } = useFormContext();
	
	return (
		<LinkContainerMUI>
			<TextFieldUI
				controller={{
					control,
					name: `postLink${indexField}`,
					rules: {
						required: true,
					}
				}}
				inputProps={{
					placeholder: '[Купить/https:://........]',
					
				}}
			/>
		</LinkContainerMUI>
	);
};

const {
	LinkContainerMUI
} = useBlogLinkStyles();

export default React.memo(BlogLink);
