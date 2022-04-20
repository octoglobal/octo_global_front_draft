import React from 'react';
import {useBlogTitleStyles} from '@/components/Blog/BlogNewPost/BlogTitle/style';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useFormContext} from 'react-hook-form';

const BlogTitle = () => {
	const { control } = useFormContext();

	return (
		<TitleContainerMUI>
			<TextFieldUI
				controller={{
					name: 'blogTitle',
					control,
				}}
				inputProps={{
					placeholder: 'Название поста'
				}}
			/>
		</TitleContainerMUI>
	);
};

const {
	TitleContainerMUI
} = useBlogTitleStyles();

export default React.memo(BlogTitle);
