import React from 'react';

import SignUpForm from '../forms/SignUpForm/SignUpForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '../AnyPage/FormComponent/FormComponent';
import SignUpPromt from '../AnyPage/AuthFormPromt/SignUpPromt/SignUpPromt';
import { useCustomRouter } from '@/hooks/useCustomRouter';

import {useSignUpFormStyle} from './style';

const SignUp = () => {

	const {pushTo} = useCustomRouter();

	const {
		SignUpFormWrapperBox,
	} = useSignUpFormStyle();

	const handlerToLogin = () => {
		pushTo('/login');
	};

	return (
		<AuthFormLayout>
			<FormComponent title="Регистрация">
				<SignUpFormWrapperBox>
					<SignUpForm />
				</SignUpFormWrapperBox>
				<SignUpPromt
					onClickLogin={handlerToLogin}
				/>
			</FormComponent>
		</AuthFormLayout>
	);
};

export default React.memo(SignUp);
