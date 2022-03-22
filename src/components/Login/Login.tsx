import React from 'react';
import {Box} from '@mui/material';

import LoginForm from '../forms/LoginForm/LoginForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';

const Login = () => {

	return (
		<AuthFormLayout>
			<Box>
				<LoginForm />
			</Box>
		</AuthFormLayout>
	);
};

export default Login;
