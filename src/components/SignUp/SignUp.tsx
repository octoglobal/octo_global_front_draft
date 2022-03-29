import React from 'react';

import SignUpForm from '../forms/SignUpForm/SignUpForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';

const SignUp = () => {
	return (
		<AuthFormLayout>
			<SignUpForm />
		</AuthFormLayout>
	);
};

export default React.memo(SignUp);
