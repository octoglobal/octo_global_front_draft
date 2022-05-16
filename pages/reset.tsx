import React, {useEffect} from 'react';
import {Box, useMediaQuery} from '@mui/material';
import type {NextPage} from 'next';

import ResetPasswordForm from '../src/components/forms/ResetPasswordForm/ResetPasswordForm';
import AuthFormLayout from '../src/layout/AuthFormLayout/AuthFormLayout';
import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';
import ButtonUI from '../src/UI/UIComponents/ButtonUI/ButtonUI';

const Reset: NextPage = () => {

	const isMobile = useMediaQuery('(max-width: 499px)');

	const {
		toggleDrawer,
		toggleTab,
	} = useSwipeableDrawerStore();

	const onToggleMenu = () => {
		toggleDrawer();
		toggleTab('reset');
	};

	useEffect(() => {
		if (isMobile) {
			onToggleMenu();
		}
	}, [isMobile]);

	return (
		<AuthFormLayout>
			<Box>
				{!isMobile ? (
					<FormComponent title="Восстановление пароля">
						<ResetPasswordForm />
					</FormComponent>
				) : (
					<ButtonUI onClick={onToggleMenu}>
						Открыть форму восстановления пароля
					</ButtonUI>
				)}
			</Box>
		</AuthFormLayout>
	);
};

export default React.memo(Reset);
