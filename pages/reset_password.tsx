import React, {useEffect, useState} from 'react';
import {Box, styled} from '@mui/material';
import type {NextPage} from 'next';

import {useCustomRouter} from '@/hooks/useCustomRouter';
import AuthFormLayout from '@/layout/AuthFormLayout/AuthFormLayout';
import RepeatPasswordForm from '../src/components/forms/RepeatPasswordForm/RepeatPasswordForm';

const BoxUI = styled('div')(() => ({
	fontWeight: '500',
	fontSize: '36px',
	lineHeight: '42px',

	color: '#000000',
}));

const ResetPassword: NextPage = () => {

	const {router, pushTo} = useCustomRouter();

	const [showForm, setShowForm] = useState<boolean>(true);
	const [token, setToken] = useState<string>('');

	useEffect(() => {
		const tokenFromQuery = router.query.token as string;
		const expaire = router.query.expaire as string;

		const expaireData = new Date(expaire);
		const currendDate = new Date();

		const time = expaireData.getTime();
		const grinvic = new Date(time);
		const diff = grinvic.getTimezoneOffset();
		const local = new Date(time - (diff * 60 * 1000));

		if (currendDate < local) {
			setShowForm(false);
			setToken(tokenFromQuery);
		}
	}, [router.query]);

	const handlerPushToReset = () => {
		pushTo('/reset');
	};

	return (
		<AuthFormLayout>
			<Box>
				{!showForm ? (
					<RepeatPasswordForm token={token}/>
				) : (
					<BoxUI>
						<Box>Упс! Время ссылки истекло</Box>
						<Box>Для получения новой, нажмите <Box
							component="span"
							onClick={handlerPushToReset}
							sx={{
								color: '#274D82',
								cursor: 'pointer',
							}}>здесь</Box></Box>
					</BoxUI>
				)}
			</Box>
		</AuthFormLayout>
	);
};

export default React.memo(ResetPassword);
