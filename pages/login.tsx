import React from 'react';
import type {NextPage} from 'next';
import LoginPage from '@/components/Login/Login';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';

const Login: NextPage = () =>  {
	return (
		<HeaderLayout>
			<LoginPage/>
		</HeaderLayout>

	);
};
export default React.memo(Login);
