import {styled} from '@mui/material';

export const useReviewStyle = () => {

	const ReviewContentMUI = styled('div')(({theme}) => ({
		marginTop: '120px',

		// border: '1px solid black',

		[theme.breakpoints.down(501)]: {
			marginTop: '80px',
		}
	}));

	const ReviewBottomMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		// border: '1px solid purple',

		'& > div:first-child': {
			alignSelf: 'flex-start',
			maxWidth: '546px',
			// padding: '0',
			padding: '30px 0px',
			// border: '1px solid green',
		},

		[theme.breakpoints.down(891)]: {
			flexDirection: 'column',


			'& > div:first-child': {
				margin: '0 auto',
			},
		},

		[theme.breakpoints.down(501)]: {
			flexDirection: 'column',

			'& > div:first-child': {
				alignSelf: 'flex-start',
				maxWidth: '100%',
				minWidth: '100px',
				// padding: '0',
				padding: '25px 0px',
				// border: '1px solid green',
			},
		}
	}));

	const PaginationWrappMUI = styled('div')(({theme}) => ({
		marginRight: '112px',

		[theme.breakpoints.down(891)]: {
			margin: '0 auto',
		}
	}));

	return {
		ReviewContentMUI,
		ReviewBottomMUI,
		PaginationWrappMUI
	};
};
