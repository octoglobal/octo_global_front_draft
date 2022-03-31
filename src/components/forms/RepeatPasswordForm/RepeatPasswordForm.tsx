import React, {FC} from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';
import {useLogin} from '@/components/forms/LoginForm/useLogin';

const RepeatPasswordForm : FC = () => {

	const {
		handleSubmit,
		// control,
		setError,
	} = useForm();
	const {onSubmit} = useLogin(setError);

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmit)}>
			RepeatPasswordForm
		</Box>
	);
};

export default React.memo(RepeatPasswordForm);
