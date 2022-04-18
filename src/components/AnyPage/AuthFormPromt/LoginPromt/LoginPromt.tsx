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
		FormsFooterContainerMUI,
		FormFooterItemLink,
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
		<FormsFooterContainerMUI>
			<FormsFooterInfoBox>
				<Typography variant="body2">
					<Box onClick={handlerToRefreshPassword}>
						<FormFooterItemLink>
							Забыли пароль ?
						</FormFooterItemLink>
					</Box>
				</Typography>
			</FormsFooterInfoBox>
			<FormsFooterInfoBox>
				<Typography variant="body2">
					<FormFooterItemLink>
						Нет учетной записи ?&nbsp;
					</FormFooterItemLink>
					<Box component="span" onClick={handlerToSignUp}>
						<a>
							<FormsLink>Регистрация</FormsLink>
						</a>
					</Box>
				</Typography>
			</FormsFooterInfoBox>
		</FormsFooterContainerMUI>
	);
};

export default React.memo(LoginPromt);
