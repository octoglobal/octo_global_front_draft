import React from 'react';
import {Box} from '@mui/material';
import type {NextPage} from 'next';

import ResetPasswordForm from '../src/components/forms/ResetPasswordForm/ResetPasswordForm';
import AuthFormLayout from '../src/layout/AuthFormLayout/AuthFormLayout';

const Reset: NextPage = () => {

	return (
		<AuthFormLayout>
			<Box>
				<ResetPasswordForm />
			</Box>
		</AuthFormLayout>
	);
};

export default React.memo(Reset);
