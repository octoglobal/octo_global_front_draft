import {styled} from '@mui/material';

export const useReviewListStyle = () => {

	const ReviewsWrappMUI = styled('div')(() => ({
		minHeight: '404px',
	}));

	const ReviewBlockMUI = styled('div')(({theme}) => ({
		// border: '1px solid red',

		'& > div': {
			marginBottom: '32px',
		},
		'& > div:last-child': {
			marginBottom: '0px',
		},

		[theme.breakpoints.down(501)]: {
			'& > div': {
				marginBottom: '15px',
			},
		}
	}));

	const ReviewsContentMUI = styled('div')(({theme}) => ({
		// marginTop: '120px',
		// border: '1px solid blue',

		// minHeight: '305px',

		// display: 'flex',
		// justifyContent: 'space-between',
		// flexWrap: 'wrap',

		display: 'grid',

		gridTemplateColumns: '546px 546px',
		gridTemplateRows: 'auto auto auto',
		gridColumnGap: '26px',
		gridRowGap: '25px',

		[theme.breakpoints.down(1241)]: {

			gridTemplateColumns: 'auto',
			// gridTemplateRows: 'auto auto auto auto auto auto',
			justifyContent: 'center',
			// marginBottom: '30px',
			// gridRowGap: '15px',
			//
			// '& div:last-child': {
			// 	marginBottom: '0',
			// }
		},

		[theme.breakpoints.down(591)]: {

			gridTemplateColumns: '100%',
			// gridTemplateRows: 'auto auto auto auto auto auto',
			// justifyContent: 'center',

			// marginBottom: '30px',
			gridRowGap: '0px',

			'& > div:first-child': {
				marginBottom: '15px',
			},

			'& div:last-child': {
				marginBottom: '0',
			}
		},

		// [theme.breakpoints.down(501)]: {
		//
		// 	gridTemplateColumns: '100%',
		// 	gridTemplateRows: 'auto auto auto auto auto auto',
		// 	justifyContent: 'center',
		//
		// 	marginBottom: '30px',
		// 	gridRowGap: '15px',
		//
		// 	'& div:last-child': {
		// 		marginBottom: '0',
		// 	}
		// }
	}));

	return {
		ReviewsWrappMUI,
		ReviewsContentMUI,
		ReviewBlockMUI
	};
};
