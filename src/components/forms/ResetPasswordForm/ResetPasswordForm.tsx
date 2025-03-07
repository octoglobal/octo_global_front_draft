import React from 'react';
import {Box, Typography } from '@mui/material';
import {FieldValues,useForm} from 'react-hook-form';

import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

import {useFormsStyle} from '../style';
import {useResetPasswordForm} from '@/components/forms/ResetPasswordForm/useResetPasswordForm';
import ModalUI from 'UI/UIComponents/ModalUI/ModalUI';

const ResetPasswordForm = () => {

	const {handleSubmit, control, setError, reset} = useForm<FieldValues>();

	const {
		onSubmit,
		openModal,
		changeOpenModal,

	} = useResetPasswordForm(setError,reset);

	const {
		FormsWrapperBox,
		FormsInput,
		FormsButton,
		FormsDescription,

	} = useFormsStyle();

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			<FormsWrapperBox>

				<FormsDescription>
					<Typography variant="body2" style={{whiteSpace: 'pre-wrap'}}>
						Здравствуйте!{'\n'}
Для восстановления пароля введите свой электронный адрес, указанный при регистрации, и через несколько минут на Ваш e-mail придёт письмо с Вашими регистрационными данными и контрольной строкой для ввода нового пароля.
Для того, чтобы сбросить пароль, перейдите по следующей ссылке.
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

				<ModalUI
					dialogProps={{
						open: openModal,
						onClose:changeOpenModal
					}}
					title={'Письмо на востановление пароля отправленно'}
					closeTime={3}
				/>
			</FormsWrapperBox>
		</Box>
	);
};

export default React.memo(ResetPasswordForm);
