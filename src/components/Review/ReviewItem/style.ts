import {Collapse, styled} from '@mui/material';

export const useReviewItemStyle = () => {

	const ReviewItemWrapperMUI = styled('div')(({theme}) => ({
		padding: '10px 20px',

		border: '1px solid #E4EAF3',
		boxSizing: 'border-box',
		borderRadius: '8px',

		// border: '1px solid black',

		// minWidth: '546px',
		// maxWidth: '546px',
		width: '546px',
		maxHeight: '540px',
		height: 'fit-content',

		// marginBottom: '32px',
		// marginRight: '56px',

		[theme.breakpoints.down(591)]: {
			width: '100%',
			// maxHeight: '360px',
			// width: '100%',
			// margin: '15px 0'
			marginBottom: '0px',
			padding: '10px 12px',
			borderRadius: '5px',
			marginRight: '0',
			// height: 'auto',
			// maxHeight: 'none',
			// // minWidth: '100px',
			// maxWidth: '100%',
			// width: '100%',
			// minWidth: '100%',
		}
	}));

	const CollapseMUI = styled(Collapse)(({theme}) => ({
		[theme.breakpoints.down(501)]: {
			marginBottom: '8px'
		}
	}));

	const ReviewHeaderMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '5px',
		[theme.breakpoints.down(501)]: {
			marginBottom: '6px',
		}
	}));

	const ReviewNameMUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
		wordBreak: 'break-word',
		[theme.breakpoints.down(501)]: {
			fontSize: '16px',
			lineHeight: '19px',
		},
		[theme.breakpoints.down(361)]: {
			fontSize: '14px',
			lineHeight: '17px',
			marginRight: '10px',
		},
	}));

	const ReviewDateMUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		color: '#C4C4C4',
		wordBreak: 'break-word',
		minWidth: '150px',
		[theme.breakpoints.down(501)]: {
			fontSize: '12px',
			lineHeight: '14.5px',
			textAlign: 'right',
			minWidth: '100px',
		}
	}));

	const ReviewTextMUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '130%',
		color: '#000000',
		[theme.breakpoints.down(501)]: {
			fontSize: '16px',
			lineHeight: '19px'
		}
	}));

	const ShowMoreMUI = styled('div')(() => ({

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		color: '#274D82',
		cursor: 'pointer',

		marginTop: '5px',
		textAlign: 'end',
	}));

	return {
		CollapseMUI,
		ReviewItemWrapperMUI,
		ReviewHeaderMUI,
		ReviewNameMUI,
		ReviewDateMUI,
		ReviewTextMUI,
		ShowMoreMUI
	};
};
