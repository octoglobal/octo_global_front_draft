import React, {FC} from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

import {useReviewAddForm} from './useReviewAddForm';
import {useFormsStyle} from '@/components/forms/style';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useReviewAddFormStyle} from '@/components/forms/ReviewAddForm/style';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useMobile} from '@/hooks/useMedia';

const ReviewAddForm: FC = () => {

	const {handleSubmit, control, setError} = useForm();
	const {isMobile} = useMobile();
	const {onSubmit} = useReviewAddForm(setError);

	const {
		FormsWrapperBox,
		TextAreaUI,
	} = useFormsStyle();

	const {
		ReviewAddFormWrapperMUI,
		ButtonSubmitMUI
	} = useReviewAddFormStyle();

	return (
		<ReviewAddFormWrapperMUI>
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<FormsWrapperBox>
					<TextFieldUI
						controller={{
							name: 'text',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: isMobile ? 'Оставьте отзыв' : 'Введите текст',
							name: 'text',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Почта"',
							multiline: true,
							sx: TextAreaUI
						}}
					/>

					<ButtonUI
						type="submit"
						style={ButtonSubmitMUI}
					>
						Отправить
					</ButtonUI>
				</FormsWrapperBox>
			</Box>
		</ReviewAddFormWrapperMUI>
	);
};

export default React.memo(ReviewAddForm);
