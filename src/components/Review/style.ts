import {styled} from '@mui/material';

export const useReviewStyle = () => {

	const ReviewContentMUI = styled('div')(({theme}) => ({
		marginTop: '120px',

		[theme.breakpoints.down(501)]: {
			marginTop: '80px',
		}
	}));

	const ReviewBottomMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& > div:first-child': {
			alignSelf: 'flex-start',
			maxWidth: '546px',
			padding: '30px 0px',
		},

		[theme.breakpoints.down(1241)]: {
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
				padding: '25px 0px',
			},
		}
	}));

	const PaginationWrappMUI = styled('div')(({theme}) => ({
		width: '100%',
		marginLeft: '183px',
		marginBottom: '20px',

		[theme.breakpoints.down(1241)]: {
			margin: '0 auto 15px',

			'& ul': {
				justifyContent: 'center',
			}
		}
	}));

	return {
		ReviewContentMUI,
		ReviewBottomMUI,
		PaginationWrappMUI
	};
};
