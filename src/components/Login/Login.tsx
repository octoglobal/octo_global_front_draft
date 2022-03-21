import React from 'react';
import TextFieldUI from '../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';
import ButtonUI from '../../UI/UIComponents/ButtonUI/ButtonUI';
import {useLogin} from '@/components/Login/useLogin';

const Login = () => {

	const {handleSubmit, control, setError} = useForm();
	const {onSubmit} = useLogin(setError);

	return (
		<>
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
				<ButtonUI type='submit'>
					Отправить
				</ButtonUI>
			</Box>
		</>
	);
};

export default Login;
