import React from 'react';
import {Box} from '@mui/material';
import type {NextPage} from 'next';

import {useCustomRouter} from '@/hooks/useCustomRouter';
import AuthFormLayout from '@/layout/AuthFormLayout/AuthFormLayout';
import RepeatPasswordForm from '../src/components/forms/RepeatPasswordForm/RepeatPasswordForm';
// import {ToRusDate, formatDate} from '@/services/services';

const ResetPassword : NextPage = () => {

	const {router} = useCustomRouter();

	console.log('router: ', router);

	// const token = router.query.token;
	// const expaire = router.query.expaire;

	// const expaireData = new Date(expaire);
	//
	//
	// const time = expaireData.getTime();
	//
	//
	// const grinvic = new Date(time);
	//
	//
	// const diff = grinvic.getTimezoneOffset();
	//
	// const local = new Date(time - (Math.abs(diff) * 60 * 1000));
	//
	// console.log('diff: ', diff);
	// console.log('grinvic: ', formatDate(grinvic));
	// console.log('local: ', formatDate(local));
	//
	const isValidTime = true;

	return (
		<AuthFormLayout>
			<Box>
				{isValidTime ? (
					<RepeatPasswordForm />
				) : (
					<Box>Время действия ссылки вышло, попробуйте в другой раз</Box>
				)}
			</Box>
		</AuthFormLayout>
	);
};

export default React.memo(ResetPassword);
