import React, {FC} from 'react';
import { Box, Typography } from '@mui/material';
import {useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useSignUp} from '@/components/SignUp/useSignUp';
import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import CheckBoxUI from '../../../UI/UIComponents/CheckBoxUI/CheckBoxUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import TextFieldPasswordUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';

import {useFormsStyle} from '../style';

const SignUpForm : FC = () => {

	const {pushTo} = useCustomRouter();

	const {
		handleSubmit,
		control,
		setError,
		formState: {
			// isValid,
			errors
		}
	} = useForm();

	const {onSubmit} = useSignUp(setError);

	const {
		FormsWrapperBox,
		FormsLink,
		FormsInput,
		FormsButton,
		FormsCheckBoxWrapper,
		FormHelperErrorUI
	} = useFormsStyle();

	const handlerPushToPolicy = () => {
		pushTo('/privacypolicy');
	};

	return (
		<Box component='form' onSubmit={handleSubmit(onSubmit)}>
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
							placeholder: 'Имя',
							name: 'name',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Имя"',
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
							placeholder: 'Фамилия',
							name: 'surname',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Фамилия"',
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
							placeholder: 'Почта',
							name: 'email',
							type: 'email',
							required: true,
							// helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormsInput>

				<FormsInput>
					<TextFieldPasswordUI
						controller={{
							name: 'password',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: 'Пароль',
							name: 'password',
							required: true,
							// helperText: 'Заполните поле "Пароль"',
						}}
					/>
				</FormsInput>

				<FormsInput>
					<TextFieldPasswordUI
						controller={{
							name: 'confirmPassword',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: 'Повторите пароль',
							name: 'password',
							required: true,
							// helperText: 'Заполните поле "Повторите пароль"',
						}}
					/>
				</FormsInput>

				<FormsCheckBoxWrapper>
					<CheckBoxUI
						controller={{
							name: 'publicOffer',
							control,
							defaultValue: false,
							rules: { required: 'Заполните все поля' },
						}}
					/>

					<Typography>Я соглашаюсь с публичной офертой</Typography>
					<FormHelperErrorUI>
						<ErrorMessage
							errors={errors}
							name="publicOffer"
							as="span"
						/>
					</FormHelperErrorUI>
				</FormsCheckBoxWrapper>

				<FormsCheckBoxWrapper>
					<CheckBoxUI
						controller={{
							name: 'privacyPolicy',
							control,
							defaultValue: false,
							rules: { required: 'Заполните все поля' },
						}}
					/>

					<Typography variant="body2">
						Я соглашаюсь с&nbsp;
						<FormsLink onClick={handlerPushToPolicy}>
							политикой конфиденциальности
						</FormsLink>
					</Typography>
					<FormHelperErrorUI>
						<ErrorMessage
							errors={errors}
							name="privacyPolicy"
							as="span"
						/>
					</FormHelperErrorUI>
				</FormsCheckBoxWrapper>

				<FormsButton>
					<ButtonUI
						type="submit"
						// disabled={!isValid || !isDirty}
						// disabled={!isValid}
						// disabled={!isDirtyAll}
					>
						Зарегистрироваться
					</ButtonUI>
				</FormsButton>
			</FormsWrapperBox>
		</Box>
	);
};

export default React.memo(SignUpForm);
