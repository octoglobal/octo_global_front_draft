import React from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';
import ButtonUI from '../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useSignUp} from '@/components/SignUp/useSignUp';

const SignUp = () => {

	const {handleSubmit, control, setError} = useForm();
	const {onSubmit} = useSignUp(setError);

	return (
		<Box component='form' onSubmit={handleSubmit(onSubmit)}>
			<TextFieldUI
				controller={{
					name: 'name',
					control,
					defaultValue: '',
					rules: {required: true}
				}}
				inputProps={{
					label: 'Имя',
					name: 'name',
					required: true,
					helperText: 'Заполните поле "Имя"'
				}}
			/>
			<TextFieldUI
				controller={{
					name: 'surname',
					control,
					defaultValue: '',
					rules: {required: true}
				}}
				inputProps={{
					label: 'Фамилия',
					name: 'surname',
					required: true,
					helperText: 'Заполните поле "Фамилия"'
				}}
			/>
			<TextFieldUI
				controller={{
					name: 'email',
					control,
					defaultValue: '',
					rules: {required: true}
				}}
				inputProps={{
					label: 'Почта',
					name: 'email',
					type: 'email',
					required: true,
					helperText: 'Заполните поле "Почта"'
				}}
			/>
			<TextFieldUI
				controller={{
					name: 'password',
					control,
					defaultValue: '',
					rules: {required: true}
				}}
				inputProps={{
					label: 'Пароль',
					name: 'password',
					required: true,
					helperText: 'Заполните поле "Пароль"'
				}}
			/>
			<TextFieldUI
				controller={{
					name: 'confirmPassword',
					control,
					defaultValue: '',
					rules: {required: true}
				}}
				inputProps={{
					label: 'Повторите пароль',
					name: 'password',
					required: true,
					helperText: 'Заполните поле "Повторите пароль"'
				}}
			/>
			<ButtonUI type='submit'>
				Войти
			</ButtonUI>
		</Box>
	);
};

export default React.memo(SignUp);
