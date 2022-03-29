import React from 'react';

import SignUpForm from '../forms/SignUpForm/SignUpForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '../AnyPage/FormComponent/FormComponent';

const SignUp = () => {
	return (
		<AuthFormLayout>
			<FormComponent title="Регистрация">
				<SignUpForm />
			</FormComponent>
		</AuthFormLayout>
	);
};

export default React.memo(SignUp);
