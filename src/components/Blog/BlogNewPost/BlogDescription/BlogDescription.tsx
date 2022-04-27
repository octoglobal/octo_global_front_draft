import React from 'react';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useFormContext} from 'react-hook-form';
import {useBlogDescriptionStyles} from '@/components/Blog/BlogNewPost/BlogDescription/style';


const BlogDescription = ({body}) => {
	const { control } = useFormContext();
	const text =  body ? body : '';
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
				
					defaultValue: text,
				}}
			/>
		</TextAreaContainerMUI>
	);
};

const {
	TextAreaContainerMUI
} = useBlogDescriptionStyles();

export default React.memo(BlogDescription);
