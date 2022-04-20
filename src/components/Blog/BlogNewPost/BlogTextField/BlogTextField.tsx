import React, {FC} from 'react';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useBlogTextFieldStyles} from '@/components/Blog/BlogNewPost/BlogTextField/style';
import {useFormContext} from 'react-hook-form';

interface IBlogSubtitleProps {
	name: string,
	placeholder: string,
};

const BlogTextField: FC<IBlogSubtitleProps> = ({name, placeholder}) => {
	const {control} = useFormContext();

	return (
		<TextFieldContainerMUI>
			<TextFieldUI
				controller={{
					name,
					control,
				}}
				inputProps={{
					placeholder
				}}
			/>
		</TextFieldContainerMUI>
	);
};

const {
	TextFieldContainerMUI
} = useBlogTextFieldStyles();

export default React.memo(BlogTextField);
