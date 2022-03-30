import React from 'react';
import {Box} from '@mui/material';
import type {NextPage} from 'next';

import ResetPasswordForm from '../src/components/forms/ResetPasswordForm/ResetPasswordForm';
import AuthFormLayout from '../src/layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';

const Reset: NextPage = () => {

	return (
		<AuthFormLayout>
			<Box>
				<FormComponent title="Восстановление пароля">
					<ResetPasswordForm />
				</FormComponent>
			</Box>
		</AuthFormLayout>
	);
};

export default React.memo(Reset);
