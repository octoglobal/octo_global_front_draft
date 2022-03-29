import React from 'react';
import Link from 'next/link';
import {Box, Typography } from '@mui/material';
import {useForm} from 'react-hook-form';

import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

import {useFormsStyle} from '../style';

import {useLogin} from './useLogin';

const LoginForm = () => {

	const {handleSubmit, control, setError} = useForm();
	const {onSubmit} = useLogin(setError);

	const {
		FormsWrapperBox,
		FormsFooterInfoBox,
		FormsLink,
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
					<TextFieldUI
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
					<ButtonUI type='submit'>
						Войти
					</ButtonUI>
				</FormsButton>

				<FormsFooterInfoBox>
					<Typography variant="body2">
						<Link href="/reset">
							<a>
								Забыли пароль ?
							</a>
						</Link>
					</Typography>
				</FormsFooterInfoBox>

				<FormsFooterInfoBox>
					<Typography variant="body2">
						Нет учетной записи ?&nbsp;
						<Link href="/signup">
							<a>
								<FormsLink>Регистрация</FormsLink>
							</a>
						</Link>
					</Typography>
				</FormsFooterInfoBox>
			</FormsWrapperBox>
		</Box>
	);
};

export default React.memo(LoginForm);
