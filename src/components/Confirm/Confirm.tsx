import React from 'react';
import {useConfirm} from '@/components/Confirm/useConfirm';
import {Box, styled} from '@mui/material';
import {useCustomRouter} from '@/hooks/useCustomRouter';

import Octo_Mail from '../../UI/UIIcon/Octo_Mail.svg';
import ButtonUI from '../../UI/UIComponents/ButtonUI/ButtonUI';

const BoxUI = styled('div')(({theme}) => ({
	fontWeight: '500',
	fontSize: '36px',
	lineHeight: '42px',

	color: '#000000',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	marginTop: '100px',

	[theme.breakpoints.down(500)]: {
		marginTop: '40px',

		fontSize: '24px',
		lineHeight: '26px',
	}
}));

const BoxWrapperUI = styled('div')(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'left',

	'& svg': {
		alignSelf: 'center',
		marginTop: '60px',
	},

	[theme.breakpoints.down(500)]: {
		width: '100%',
	}
}));

const Confirm = () => {

	const {isUserConfirm} = useConfirm();
	const {query, pushTo} = useCustomRouter();

	console.log('query: ', query);

	const handlerPushToIndex = () => {
		pushTo('/');
	};

	return (
		<div>
			{isUserConfirm && <h1>
				<BoxUI>
					<BoxWrapperUI>
						<Box>Спасибо!</Box>
						<Box>Почта <Box
							component="span"
							sx={{
								color: '#274D82',
								cursor: 'pointer',
							}}>{query.email}</Box> успешно подтверждена</Box>
						<Octo_Mail />

						<ButtonUI
							onClick={handlerPushToIndex}
							style={{
								width: '135px',
								height: '32px',
								alignSelf: 'center',
								marginTop: '60px'
							}}
						>
							На главную
						</ButtonUI>
					</BoxWrapperUI>
				</BoxUI>
			</h1>}
			{!isUserConfirm && <h1>false</h1>}
		</div>
	);
};

export default React.memo(Confirm);
