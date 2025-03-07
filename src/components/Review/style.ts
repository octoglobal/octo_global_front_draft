import {styled} from '@mui/material';

export const useReviewStyle = () => {

	const ReviewContentMUI = styled('div')(({theme}) => ({
		marginTop: '120px',
		[theme.breakpoints.down(1025)]: {
			marginTop: '70px',
		},
		[theme.breakpoints.down(501)]: {
			marginTop: '80px',
			height: `${window.innerHeight - 65}px`,
			display: 'flex',
			flexDirection: 'column',
		},
		[theme.breakpoints.down(350)]: {
			marginTop: '70px',
		}
	}));

	const ReviewBottomMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 70px',

		'& > div:first-child': {
			alignSelf: 'flex-start',
			maxWidth: '546px',
			padding: '30px 0px',
			marginRight: '20px',
		},

		[theme.breakpoints.down(1241)]: {
			flexDirection: 'column',

			'& > div:first-child': {
				margin: '0 auto',
			},
		},

		[theme.breakpoints.down(769)]: {
			flexDirection: 'column',
			padding: '0',

			'& > div:first-child': {
				alignSelf: 'flex-start',
				maxWidth: '100%',
				minWidth: '100px',
				padding: '15px 0px 30px',
			},
		}
	}));

	const PaginationWrappMUI = styled('div')(({theme}) => ({
		width: 'auto',
		// marginLeft: '183px',
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
