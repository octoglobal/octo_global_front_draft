import React from 'react';
import {Box} from '@mui/material';

import LoginForm from '../forms/LoginForm/LoginForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '../../components/AnyPage/FormComponent/FormComponent';

const Login = () => {

	return (
		<AuthFormLayout>
			<Box>
				<FormComponent title="Вход">
					<LoginForm />
				</FormComponent>
			</Box>
		</AuthFormLayout>
	);
};

export default Login;
