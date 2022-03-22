import React from 'react';
import { Box, Typography } from '@mui/material';
import {useForm} from 'react-hook-form';
import Link from 'next/link';

import FormComponent from '../../../components/AnyPage/FormComponent/FormComponent';
import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import CheckBoxUI from '../../../UI/UIComponents/CheckBoxUI/CheckBoxUI';
import {useSignUp} from '@/components/SignUp/useSignUp';

import {useFormsStyle} from '../style';

const SignUpForm = () => {

	const {handleSubmit, control, setError} = useForm();
	const {onSubmit} = useSignUp(setError);

	const {
		FormsWrapperBox,
		FormsFooterInfoBox,
		FormsLink,
		FormsInput,
		FormsButton,
		FormsCheckBoxWrapper,
	} = useFormsStyle();

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<FormComponent title="Регистрация">
				<FormsWrapperBox>
					<FormsInput>
						<TextFieldUI
							controller={{
								name: 'name',
								control,
								defaultValue: '',
								rules: { required: true },
							}}
							inputProps={{
								label: 'Имя',
								name: 'name',
								required: true,
								helperText: 'Заполните поле "Имя"',
							}}
						/>
					</FormsInput>

					<FormsInput>
						<TextFieldUI
							controller={{
								name: 'surname',
								control,
								defaultValue: '',
								rules: { required: true },
							}}
							inputProps={{
								label: 'Фамилия',
								name: 'surname',
								required: true,
								helperText: 'Заполните поле "Фамилия"',
							}}
						/>
					</FormsInput>

					<FormsInput>
						<TextFieldUI
							controller={{
								name: 'email',
								control,
								defaultValue: '',
								rules: { required: true },
							}}
							inputProps={{
								label: 'Почта',
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
								rules: { required: true },
							}}
							inputProps={{
								label: 'Пароль',
								name: 'password',
								required: true,
								helperText: 'Заполните поле "Пароль"',
							}}
						/>
					</FormsInput>

					<FormsInput>
						<TextFieldUI
							controller={{
								name: 'confirmPassword',
								control,
								defaultValue: '',
								rules: { required: true },
							}}
							inputProps={{
								label: 'Повторите пароль',
								name: 'password',
								required: true,
								helperText: 'Заполните поле "Повторите пароль"',
							}}
						/>
					</FormsInput>

					<FormsCheckBoxWrapper>
						<CheckBoxUI
							controller={{
								name: 'publicOffer',
								control,
								defaultValue: '',
								rules: { required: true },
							}}
						/>

						<Typography>Я соглашаюсь с публичной офертой</Typography>
					</FormsCheckBoxWrapper>

					<FormsCheckBoxWrapper>
						<CheckBoxUI
							controller={{
								name: 'privacyPolicy',
								control,
								defaultValue: '',
								rules: { required: true },
							}}
						/>

						<Typography variant="body2">
							Я соглашаюсь с&nbsp;
							<FormsLink>
								политикой конфиденциальности
							</FormsLink>
						</Typography>
					</FormsCheckBoxWrapper>

					<FormsButton>
						<ButtonUI type="submit">Зарегистрироваться</ButtonUI>
					</FormsButton>

					<FormsFooterInfoBox>
						<Typography variant="body2">
							У вас есть учетная запись ?&nbsp;
							<Link href="/login">
								<a>
									<FormsLink>Войти</FormsLink>
								</a>
							</Link>
						</Typography>
					</FormsFooterInfoBox>
				</FormsWrapperBox>
			</FormComponent>
		</Box>
	);
};

export default React.memo(SignUpForm);
