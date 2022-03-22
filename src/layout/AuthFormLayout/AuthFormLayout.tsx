import React, {FC} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

interface AuthFormLayout {
	children: React.ReactChild | React.ReactNode;
}

const AuthFormLayoutBox = styled(Box)(({theme}) => ({
	border: '1px solid blue',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	width: '100%',
	height: '90vh',
}));

const AuthFormLayout: FC<AuthFormLayout> = ({children}) => {
	return (
		<AuthFormLayoutBox>
			{children}
		</AuthFormLayoutBox>
	);
};

export default React.memo(AuthFormLayout);
