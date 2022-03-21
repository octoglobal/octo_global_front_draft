import React from 'react';
import type {NextPage} from 'next';
import LoginPage from '@/components/Login/Login';

const Login: NextPage = () => <LoginPage/>;

export default React.memo(Login);
