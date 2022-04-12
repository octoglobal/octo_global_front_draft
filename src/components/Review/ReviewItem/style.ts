import {styled} from '@mui/material';

export const useReviewItemStyle = () => {

	const ReviewItemWrapperMUI = styled('div')(({theme}) => ({
		padding: '10px 20px',
		border: '1px solid #AABCBF',
		boxSizing: 'border-box',

		minWidth: '546px',
		maxHeight: '219px',
		height: 'fit-content',

		marginBottom: '32px',
		marginRight: '56px',

		[theme.breakpoints.down(501)]: {
			width: '100%',
			// margin: '15px 0'
			marginBottom: '15px',
			marginRight: '0',
			height: 'auto',
			maxHeight: 'none',
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
	}));

	return {
		ReviewItemWrapperMUI,
		ReviewHeaderMUI,
		ReviewNameMUI,
		ReviewDateMUI,
		ReviewTextMUI
	};
};
