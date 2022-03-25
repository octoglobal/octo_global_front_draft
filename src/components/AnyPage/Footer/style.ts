import {styled} from '@mui/material';

export const useFooterStyle = () => {

	const FooterWrapperUI = styled('footer')(({theme}) => ({
		// height: '166px',
		background: '#274D82',
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		padding: '25px 80px',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',

		[theme.breakpoints.down(405)]: {
			flexDirection: 'column',
			padding: '15px',
		}
	}));

	const FooterRowUI  = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',

		[theme.breakpoints.down(405)]: {
			justifyContent: 'space-between',
		}
	}));

	const FooterRowIconsUI  = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		'& svg': {
			marginRight: '10px',
		}
	}));

	const FooterColumnBlockUI  = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		// width: '210px',
		margin: '0 64px',

		'&:first-child': {
			marginLeft: '0px',
		},

		'&:last-child': {
			marginRight: '0px',
		},

		[theme.breakpoints.down(405)]: {
			margin: '10px 0',
			borderTop: '1px solid rgba(223, 228, 236, 0.5)',

			'&:nth-child(1)': {
				order: '2'
			},
			'&:nth-child(2)': {
				order: '3'
			},
			'&:nth-child(3)': {
				order: '4'
			},
			'&:nth-child(4)': {
				order: '1'
			},
		}
	}));

	const FooterColumnTitleUI  = styled('h6')(() => ({
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '16px',
		marginBottom: '15px'
	}));

	const FooterColumnTextUI  = styled('p')(() => ({
		width: 'auto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '16px',
		marginBottom: '15px',

		'&:last-child': {
			marginBottom: '0px',
		}
	}));

	const IndexTitleUI  = styled('p')(() => ({
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',
		textDecorationLine: 'underline',
		color: '#FFFFFF',

		marginTop: '39px',
	}));

	return {
		FooterWrapperUI,
		FooterRowUI,
		FooterColumnBlockUI,
		FooterColumnTitleUI,
		FooterColumnTextUI,
		IndexTitleUI,
		FooterRowIconsUI
	};
};
