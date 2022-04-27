import React, {FC} from 'react';
import {useBlogLinkStyles} from '@/components/Blog/BlogNewPost/BlogLink/style';
import {useFormContext} from 'react-hook-form';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

interface IBlogLinkProps {
	indexField: number;
	value: string
};

const BlogLink: FC<IBlogLinkProps> = ({indexField,value}) => {

	const { control } = useFormContext();
	const text =  value ? value : '';
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
					defaultValue: text
				}}
			/>
		</LinkContainerMUI>
	);
};

const {
	LinkContainerMUI
} = useBlogLinkStyles();

export default React.memo(BlogLink);
