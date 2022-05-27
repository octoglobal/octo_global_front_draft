import {styled} from '@mui/material';

export const useFooterStyle = () => {

	const FooterWrapperUI = styled('footer')(() => ({
		// height: '166px',
		background: '#274D82',
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		position: 'relative',
		zIndex: '2',
		// padding: '25px 80px',

	}));

	const FooterContentUI = styled('div')(({theme}) => ({
		// height: '166px',
		background: '#274D82',
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		// padding: '25px 80px',

		maxWidth: '1440px',
		padding: '25px 80px 23px',
		margin: '0 auto',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',

		[theme.breakpoints.down(1025)]: {
			padding: '15px',
		},

		[theme.breakpoints.down(801)]: {
			flexDirection: 'column',
			padding: '15px',
		},
	}));

	const FooterRowUI = styled('div')(({theme}) => ({
		display: 'flex',
		// flexDirection: 'row',
		gap: 20,

		[theme.breakpoints.down(801)]: {
			justifyContent: 'space-between',

			'& div:first-child': {
				border: 'none',
				padding: '0',
			},
			'& div:nth-child(2)': {
				border: 'none',
				padding: '0',
			}
		}
	}));

	const FooterRowIconsUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		'& svg': {
			marginRight: '13px',
			cursor: 'pointer',
		}
	}));

	const FooterColumnBlockUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		[theme.breakpoints.down(801)]: {
			margin: '0 0 10px',
			padding: '0 0 10px',
			borderBottom: '1px solid rgba(223, 228, 236, 0.5)',

			'&:nth-child(1)': {
				order: '2'
			},
			'&:nth-child(2)': {
				order: '3'
			},
			'&:nth-child(3)': {
				border: 'none',
				order: '4',
				margin: '0',
				padding: '0',
			},
			'&:nth-child(4)': {
				order: '1'
			},
		}
	}));

	const FooterColumnTitleUI = styled('h6')(() => ({
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		marginBottom: '15px'
	}));

	const FooterColumnTextUI = styled('a')(() => ({
		width: 'auto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '16px',
		marginBottom: '15px',
		cursor: 'pointer',
		'&:last-child': {
			marginBottom: '0px',
		}
	}));

	const FooterColumnSocialBlockMUI = styled('div')(() => ({
	
	}));
	

	const IndexTitleUI = styled('a')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',	
		textDecorationLine: 'underline',
		color: '#FFFFFF',
		marginTop: '39px',
		display: 'block',
		[theme.breakpoints.down(801)]: {
			order: '5',
			marginTop: '10px',
			textAlign: 'center',
		}
	}));
	
	const FooterColumnTextMUI = styled('a')(() => ({
		width: 'auto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '16px',
		marginBottom: '15px',
		textDecoration: 'underline',
		cursor: 'pointer',
		'&:last-child': {
			marginBottom: '0px',
		}
	}));
	return {
		FooterWrapperUI,
		FooterContentUI,
		FooterRowUI,
		FooterColumnBlockUI,
		FooterColumnTitleUI,
		FooterColumnTextUI,
		IndexTitleUI,
		FooterRowIconsUI,		
		FooterColumnTextMUI,
		FooterColumnSocialBlockMUI,
	};
};
