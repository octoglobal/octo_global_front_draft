import { styled } from '@mui/material';

export const useHomeSectionTitleStyles = () => {

	const TitleMUI = styled('h1')(({theme}) => ({
		fontSize: '48px',
		fontWeight: 600,
		lineHeight: '56px',
		margin: '0 0 30px 0',
		maxWidth: '750px',
		[theme.breakpoints.down(1321)]: {
			fontSize: '40px',
			lineHeight: '48px',
			margin: '0 0 15px 0',
			maxWidth: '620px',
		},
		[theme.breakpoints.down(1131)]: {
			fontSize: '34px',
			lineHeight: '40px',
			maxWidth: '520px',
		},
		[theme.breakpoints.down(1025)]: {
			fontSize: '28px',
			lineHeight: '34px',
			maxWidth: '450px',
		},
		[theme.breakpoints.down(790)]: {
			fontSize: '26px',
			lineHeight: '32px',
			maxWidth: '400px',
		},
		[theme.breakpoints.down(431)]: {
			fontSize: '24px',
			lineHeight: '30px',
			maxWidth: '325px',
		},
		[theme.breakpoints.down(350)]: {
			fontSize: '18px',
			lineHeight: '20px',
		},
	}));

	return {
		TitleMUI
	};
};
