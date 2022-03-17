import React from 'react';
import type {NextPage} from 'next';
import SingUpPage from '@/components/SignUp/SignUp';

const SignUp: NextPage = () => <SingUpPage/>;

export default React.memo(SignUp);
