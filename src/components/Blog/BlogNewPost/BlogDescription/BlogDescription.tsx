import React from 'react';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useFormContext} from 'react-hook-form';
import {useBlogDescriptionStyles} from '@/components/Blog/BlogNewPost/BlogDescription/style';


const BlogDescription = () => {
	const { control } = useFormContext();

	return (
		<TextAreaContainerMUI>
			<TextFieldUI
				controller={{
					name: 'blogDescription',
					control,
				}}
				inputProps={{
					placeholder: 'Основной текст',
					minRows: 5,
					maxRows: 5,
					multiline: true,
				}}
			/>
		</TextAreaContainerMUI>
	);
};

const {
	TextAreaContainerMUI
} = useBlogDescriptionStyles();

export default React.memo(BlogDescription);
