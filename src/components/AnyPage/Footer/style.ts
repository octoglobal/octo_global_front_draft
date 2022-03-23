import {styled} from '@mui/material';

export const useFooterStyle = () => {


	const FooterWrapperUI = styled('footer')(() => ({
		height: '159px',
		background: '#234A82',
		color: '#FFFFFF',
		fontFamily: 'Roboto',
		padding: '25px 80px',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}));

	const FooterRowUI  = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
	}));

	const FooterRowIconsUI  = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		'& svg': {
			marginRight: '10px',
		}
	}));

	const FooterColumnBlockUI  = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',

		// width: '210px',
		margin: '0 64px',
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
		marginBottom: '15px'
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
