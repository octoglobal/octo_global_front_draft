import React from 'react';
import {useBlogTitleStyles} from '@/components/Blog/BlogNewPost/BlogTitle/style';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useFormContext} from 'react-hook-form';

const BlogTitle = ({value}) => {
	const { control } = useFormContext();
	const text =  value ? value : '';
	
	return (
		<TitleContainerMUI>
			<TextFieldUI
				controller={{
					name: 'blogTitle',
					control,
				}}
				inputProps={{
					placeholder: 'Название поста',
					defaultValue: text
				}}
			/>
		</TitleContainerMUI>
	);
};

const {
	TitleContainerMUI
} = useBlogTitleStyles();

export default React.memo(BlogTitle);
