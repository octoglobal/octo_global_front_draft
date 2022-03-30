import React from 'react';
import {Box} from '@mui/material';

import LoginForm from '../forms/LoginForm/LoginForm';
import AuthFormLayout from '../../layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '../../components/AnyPage/FormComponent/FormComponent';
import LoginPromt from '@/components/AnyPage/AuthFormPromt/LoginPromt/LoginPromt';
import { useCustomRouter } from '@/hooks/useCustomRouter';

import {useLoginFormStyle} from './style';

const Login = () => {

	const {pushTo} = useCustomRouter();

	const {
		LoginFormWrapperBox
	} = useLoginFormStyle();

	const handlerClickRefreshPass = () : void => {
		pushTo('/reset');
	};

	const handlerClickRegistr = () : void => {
		pushTo('/signup');
	};

	return (
		<AuthFormLayout>
			<Box>
				<FormComponent title="Вход">
					<LoginFormWrapperBox>
						<LoginForm />
					</LoginFormWrapperBox>
					<LoginPromt
						onClickRefreshPassword={handlerClickRefreshPass}
						onClickRegistr={handlerClickRegistr}
					/>
				</FormComponent>
			</Box>
		</AuthFormLayout>
	);
};

export default Login;
