import React, {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import type {NextPage} from 'next';
// import Image from 'next/image';

import {useCustomRouter} from '@/hooks/useCustomRouter';
import AuthFormLayout from '@/layout/AuthFormLayout/AuthFormLayout';
import RepeatPasswordForm from '../src/components/forms/RepeatPasswordForm/RepeatPasswordForm';

// const BoxUI = styled('div')(({theme}) => ({
// 	fontWeight: '400',
// 	fontSize: '36px',
// 	lineHeight: '42px',
// 	color: '#000000',
// 	'& span': {
// 		fontWeight: '400',
// 	},
// 	[theme.breakpoints.down(769)]: {
// 		fontSize: '22px',
// 		lineHeight: '34px',
// 	}
// }));
//
// const ImageUI = styled('div')(({theme}) => ({
// 	marginTop: '23px',
// 	display: 'flex',
// 	justifyContent: 'center',
// 	[theme.breakpoints.down(769)]: {
// 		marginTop: '10px',
// 	}
// }));

const ResetPassword: NextPage = () => {

	const {router, /*pushTo*/} = useCustomRouter();

	// const [showForm, setShowForm] = useState<boolean>(true);
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
			// setShowForm(false);
		}
		// setShowForm(true);
		setToken(tokenFromQuery);
	}, [router.query]);

	// const handlerPushToReset = () => {
	// 	pushTo('/reset');
	// };

	return (
		<AuthFormLayout>
			<Box>

				<RepeatPasswordForm token={token}/>
				{/*{showForm ? (*/}
				{/*	<BoxUI>*/}
				{/*		<Box>Упс! Время ссылки истекло</Box>*/}
				{/*		<Box>Для получения новой, нажмите <Box*/}
				{/*			component="span"*/}
				{/*			onClick={handlerPushToReset}*/}
				{/*			sx={{*/}
				{/*				color: '#274D82',*/}
				{/*				cursor: 'pointer',*/}
				{/*			}}>здесь</Box></Box>*/}
				{/*		<ImageUI>*/}
				{/*			<Image*/}
				{/*				width={410}*/}
				{/*				height={348}*/}
				{/*				objectFit='cover'*/}
				{/*				src='/image/OctoFailed.png'*/}
				{/*				alt='octo-failed'*/}
				{/*			/>*/}
				{/*		</ImageUI>*/}
				{/*	</BoxUI>*/}
				{/*)}*/}
			</Box>
		</AuthFormLayout>
	);
};

export default React.memo(ResetPassword);
