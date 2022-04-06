import { styled } from '@mui/material';

export const useHomeAboutTextStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		marginRight: '56px',
		minWidth: '730px',
		[theme.breakpoints.down(1321)]: {
			marginRight: '20px',
			minWidth: 'auto',
		},
		[theme.breakpoints.down(1025)]: {
			marginRight: '30px',
			width: '100%',
		},
		[theme.breakpoints.down(781)]: {
			marginRight: '0px',
		}
	}));

	const ParagraphMUI = styled('p')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		marginBottom: '50px',
		fontWeight: 300,
		maxWidth: '759px',
		[theme.breakpoints.down(1321)]: {
			fontSize: '18px',
			maxWidth: '590px',
			width: '100%',
			lineHeight: '24px',
		},
		[theme.breakpoints.down(1025)]: {
			fontSize: '16px',
			lineHeight: '22px',
			maxWidth: '520px',
			marginBottom: '20px',
		},
		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '18px',
		},
		[theme.breakpoints.down(350)]: {
			fontSize: '14px',
			lineHeight: '16px',
		},
	}));

	const ButtonWrapperMUI = styled('div')(({theme}) => ({
		maxWidth: '254px',
		'& > button': {
			height: '58px',
			fontSize: '24px',
			lineHeight: '28px',
			fontWeight: 400,
			marginBottom: 0,
			padding: '15px 55px',
		},
		[theme.breakpoints.down(1025)]: {
			maxWidth: '234px',
			'& > button': {
				fontSize: '18px',
				height: '45px',
			}
		},
		[theme.breakpoints.down(781)]: {
			maxWidth: '141px',
			'& > button': {
				fontSize: '14px',
				lineHeight: '16px',
				height: '32px',
				backgroundColor: '#274D82',
				padding: '8px 23px',
				fontWeight: 300,
			}
		}
	}));

	return {
		ParagraphMUI,
		ContainerMUI,
		ButtonWrapperMUI
	};
};
