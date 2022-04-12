import React, {FC, useCallback, useMemo} from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

import {useReviewAddForm} from './useReviewAddForm';
import {useFormsStyle} from '@/components/forms/style';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useReviewAddFormStyle} from '@/components/forms/ReviewAddForm/style';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useCustomSize} from '@/hooks/useMedia';
import {useUserStore} from '@/hooks/useUserStore';
import {useCustomRouter} from '@/hooks/useCustomRouter';

const ReviewAddForm: FC = () => {

	const {
		handleSubmit,
		control,
		setError,
		formState: {
			dirtyFields,
			isSubmitted
		}
	} = useForm();

	const {isAuth} = useUserStore();
	const {isCustomSize} = useCustomSize(null, 1241);
	const {onSubmit} = useReviewAddForm(setError);
	const {pushTo} = useCustomRouter();

	const {
		FormsWrapperBox,
		TextAreaUI,
	} = useFormsStyle();

	const {
		ReviewAddFormWrapperMUI,
		ButtonSubmitMUI
	} = useReviewAddFormStyle();

	const dirtyText = useMemo(
		() => dirtyFields.text,
		[dirtyFields.text]
	);

	const isShowSubmitButton = useMemo(
		() => !isSubmitted && dirtyText,
		[isSubmitted, dirtyText]
	);

	const handlerClickButton = useCallback(() => {
		if(!isAuth) {
			pushTo('/signup');
		}
	}, [isAuth]);

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
							placeholder: isAuth ? 'Оставьте отзыв' : 'Отзывы доступны после регистрации',
							name: 'text',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Почта"',
							multiline: true,
							sx: TextAreaUI,
							inputProps: {
								maxLength: 430,
							},
							disabled: !isAuth,
							// inputRef: textCommentRef
							inputRef: input => (input && dirtyText) && input.focus(),
						}}
					/>

					{isCustomSize || isShowSubmitButton ? (
						<ButtonUI
							type={isAuth ? 'submit' : 'button'}
							style={ButtonSubmitMUI}
							onClick={handlerClickButton}
						>
							{isAuth ? 'Отправить' : 'Регистрация'}
						</ButtonUI>
					) : null}
				</FormsWrapperBox>
			</Box>
		</ReviewAddFormWrapperMUI>
	);
};

export default React.memo(ReviewAddForm);
