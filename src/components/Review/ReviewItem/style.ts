import {styled} from '@mui/material';

export const useReviewItemStyle = () => {

	const ReviewItemWrapperMUI = styled('div')(({theme}) => ({
		padding: '10px 20px',
		border: '1px solid #AABCBF',
		boxSizing: 'border-box',

		// border: '1px solid black',

		// minWidth: '546px',
		// maxWidth: '546px',
		width: '546px',
		maxHeight: '262px',
		height: 'fit-content',

		// marginBottom: '32px',
		// marginRight: '56px',

		[theme.breakpoints.down(591)]: {
			width: '100%',
			// maxHeight: '360px',
			// width: '100%',
			// margin: '15px 0'
			marginBottom: '0px',
			marginRight: '0',
			// height: 'auto',
			// maxHeight: 'none',
			// // minWidth: '100px',
			// maxWidth: '100%',
			// width: '100%',
			// minWidth: '100%',
		}
	}));

	const ReviewHeaderMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',

		marginBottom: '5px',
	}));

	const ReviewNameMUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#000000',
	}));

	const ReviewDateMUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		color: '#C4C4C4',
	}));

	const ReviewTextMUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#000000',

		wordBreak: 'break-all',
	}));

	const ShowMoreMUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#274D82',
		cursor: 'pointer',

		marginTop: '5px',
	}));

	return {
		ReviewItemWrapperMUI,
		ReviewHeaderMUI,
		ReviewNameMUI,
		ReviewDateMUI,
		ReviewTextMUI,
		ShowMoreMUI
	};
};
