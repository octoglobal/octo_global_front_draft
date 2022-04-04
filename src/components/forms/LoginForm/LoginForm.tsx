import React from 'react';
import {Box } from '@mui/material';
import {useForm} from 'react-hook-form';

import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

import {useFormsStyle} from '../style';

import {useLogin} from './useLogin';
import TextFieldPasswordUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';

const LoginForm = () => {

	const {
		handleSubmit,
		control,
		setError,
	} = useForm();

	const {onSubmit} = useLogin(setError);

	const {
		FormsWrapperBox,
		FormsInput,
		FormsButton,
	} = useFormsStyle();

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<FormsWrapperBox>
				<FormsInput>
					<TextFieldUI
						controller={{
							name: 'email',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: 'Email',
							name: 'email',
							type: 'email',
							required: true,
							helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormsInput>

				<FormsInput>
					<TextFieldPasswordUI
						controller={{
							name: 'password',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: 'Пароль',
							name: 'password',
							required: true,
							helperText: 'Заполните поле "Пароль"'
						}}
					/>
				</FormsInput>

				<FormsButton>
					<ButtonUI
						type='submit'
						// disabled={!(isDirty && isValid)}
					>
						Войти
					</ButtonUI>
				</FormsButton>

			</FormsWrapperBox>
		</Box>
	);
};

export default React.memo(LoginForm);
