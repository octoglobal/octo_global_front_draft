import {styled} from '@mui/material';

export const useAuthFormLayoutStyle = () => {

	const AuthFormLayoutBoxUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		width: '100%',
		height: 'auto',
		padding: '130px 0 100px',
	}));

	return {
		AuthFormLayoutBoxUI
	};
};
