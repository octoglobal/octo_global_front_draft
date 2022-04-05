import React from 'react';
import {Box, Typography } from '@mui/material';
import {useForm} from 'react-hook-form';

import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

import {useFormsStyle} from '../style';
import {useResetPasswordForm} from '@/components/forms/ResetPasswordForm/useResetPasswordForm';

const ResetPasswordForm = () => {

	const {handleSubmit, control, setError} = useForm();

	const {onSubmit} = useResetPasswordForm(setError);

	const {
		FormsWrapperBox,
		FormsInput,
		FormsButton,
		FormsDescription
	} = useFormsStyle();

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<FormsWrapperBox>

				<FormsDescription>
					<Typography variant="body2">
						Сообщение для смены пароля будет отправленно на вашу электронную почту
					</Typography>
				</FormsDescription>

				<FormsInput>
					<TextFieldUI
						controller={{
							name: 'email',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder	: 'Email',
							name: 'email',
							type: 'email',
							required: true,
							// helperText: 'Заполните поле "Почта"'
						}}
					/>
				</FormsInput>

				<FormsButton>
					<ButtonUI type='submit'>
						Продолжить
					</ButtonUI>
				</FormsButton>

			</FormsWrapperBox>
		</Box>
	);
};

export default React.memo(ResetPasswordForm);
