import React, {FC, useEffect} from 'react';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useBlogTextFieldStyles} from '@/components/Blog/BlogNewPost/BlogTextField/style';
import {useFormContext,useForm } from 'react-hook-form';

interface IBlogSubtitleProps {
	name: string,
	placeholder: string,
	value: string,
};

const BlogTextField: FC<IBlogSubtitleProps> = ({name, placeholder,value}) => {
	console.log('dfdfdf',value);
	const {control} = useFormContext();
	const text =  value ? value : '';
	return (
		<TextFieldContainerMUI>
			<TextFieldUI		
				controller={{					
					name,
					control,
					rules: {
						required: true,
					}
				}}
				inputProps={{
					name,
					placeholder,
					defaultValue: text
					
				}}
			/>
		</TextFieldContainerMUI>
	);
};

const {
	TextFieldContainerMUI
} = useBlogTextFieldStyles();

export default React.memo(BlogTextField);
