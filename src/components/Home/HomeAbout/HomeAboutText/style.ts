import {styled} from '@mui/material';

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

	const LinkTitleMUI = styled('h4')(({theme}) => ({
		marginBottom: '22px',
		fontSize: '32px',
		lineHeight: '37px',
		fontWeight: 400,
		[theme.breakpoints.down(501)]: {
			fontSize: '20px',
			lineHeight: '23px',
			marginBottom: '14px',
		}
	}));


	const LinkContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '265px',
		[theme.breakpoints.down(501)]: {
			margin: '0 auto',
			maxWidth: '208px',
		}
	}));


	const LinkWrapperMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}));

	const LinkItemMUI = styled('a')(({theme}) => ({
		border: 0,
		backgroundColor: '#FFFFFF',
		'& > *:first-child': {
			marginRight: '12px',
			width: '45px',
			height: '45px',
		},
		'& > *:last-child': {
			width: '43px',
			height: '43px',
		},
		[theme.breakpoints.down(501)]: {
			'& > *:first-child': {
				marginRight: '9px',
				width: '35px',
				height: '35px',
			},
			'& > *:last-child': {
				width: '33px',
				height: '33px',
			},
		}
	}));

	return {
		ParagraphMUI,
		ContainerMUI,
		LinkItemMUI,
		LinkTitleMUI,
		LinkWrapperMUI,
		LinkContainerMUI
	};
};
