import React, {FC} from 'react';
import {Typography, Box} from '@mui/material';

import {useSignUpPromtStyle} from './style';

interface ISignUpPromt {
	onClickLogin: () => void
}

const SignUpPromt : FC<ISignUpPromt> = ({
	onClickLogin,
}) => {

	const {
		FormsFooterInfoBox,
		FormsLink,
		FormsItemMUI
	} = useSignUpPromtStyle();

	const handlerToLogin = () => {
		console.log('handlerToLogin');
		onClickLogin();
	};

	return (
		<FormsFooterInfoBox>
			<Typography variant="body2">
				<FormsItemMUI>
					У вас есть учетная запись?&nbsp;
				</FormsItemMUI>
				<Box component="span" onClick={handlerToLogin}>
					<a>
						<FormsLink>Войти</FormsLink>
					</a>
				</Box>
			</Typography>
		</FormsFooterInfoBox>
	);
};

export default React.memo(SignUpPromt);
