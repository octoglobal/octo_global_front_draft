import React from 'react';
import type {NextPage} from 'next';
import SingUpPage from '@/components/SignUp/SignUp';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const SignUp: NextPage = () => {
	return (
		<HeaderLayout>
			<SingUpPage/>
		</HeaderLayout>
   
	);
	
};

export default React.memo(SignUp);
