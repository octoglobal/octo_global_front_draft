import React, {FC} from 'react';
import {Typography, Box} from '@mui/material';

import {useLoginPromtStyle} from './style';

interface ILoginPromt {
	onClickRegistr: () => void
	onClickRefreshPassword: () => void
}

const LoginPromt : FC<ILoginPromt> = ({
	onClickRegistr,
	onClickRefreshPassword
}) => {

	const {
		FormsFooterInfoBox,
		FormsLink
	} = useLoginPromtStyle();

	const handlerToRefreshPassword = () => {
		onClickRefreshPassword();
	};

	const handlerToSignUp = () => {
		onClickRegistr();
	};

	return (
		<>
			<FormsFooterInfoBox>
				<Typography variant="body2">
					<Box onClick={handlerToRefreshPassword}>
						<a>
							Забыли пароль ?
						</a>
					</Box>
				</Typography>
			</FormsFooterInfoBox>

			<FormsFooterInfoBox>
				<Typography variant="body2">
					Нет учетной записи ?&nbsp;
					<Box component="span" onClick={handlerToSignUp}>
						<a>
							<FormsLink>Регистрация</FormsLink>
						</a>
					</Box>
				</Typography>
			</FormsFooterInfoBox>
		</>
	);
};

export default React.memo(LoginPromt);
