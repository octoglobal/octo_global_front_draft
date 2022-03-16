import React from 'react';
import type {NextPage} from 'next';
import {useTranslate} from '../src/hooks/useTranslate';

const Login: NextPage = () => {

	const {language, handleChangeLanguage} = useTranslate();

	return (
		<>
			<h1>Login</h1>
			<button onClick={handleChangeLanguage('RUS')}>23</button>
		</>
	);
};

export default Login;
