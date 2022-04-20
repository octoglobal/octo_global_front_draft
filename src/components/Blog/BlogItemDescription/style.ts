import { styled } from '@mui/material';

export const useBlogItemDescriptionStyles = () => {

	const PreMUI = styled('pre')(({theme}) => ({
		wordWrap: 'break-word',
		overflow: 'hidden',
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		fontFamily: 'Roboto',
		maxWidth: '100%',
		whiteSpace: 'break-spaces',
		marginBottom: '30px',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
		}
	}));

	return {
		PreMUI
	};
};
