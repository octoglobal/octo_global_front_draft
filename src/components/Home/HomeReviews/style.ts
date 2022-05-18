import { styled } from '@mui/material';

export const useHomeReviewsStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		maxWidth: '1200px',
		margin: '0 auto 50px',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '40px'
		}
	}));

	const ListMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginBottom: '100px',
		'& > *:nth-of-type(2n)': {
			marginRight: '0px',
		},
		'& > *:last-child': {
			marginBottom: 0,
		},
		[theme.breakpoints.down(1025)]: {
			margin: '27px 0 46px',
			flexDirection: 'column',
			flexWrap: 'no-wrap',
			alignItems: 'center',
			justifyContent: 'flex-start',			
			'&> *:nth-child(1n+4)':{
				display: 'none',				
			}
		},
		[theme.breakpoints.down(350)]: {
			marginBottom: '20px',
		}
	}));

	const ItemMUI = styled('div')(({theme}) => ({
		listStyle: 'none',
		margin: '0 10px 30px 0',
		width: '49%',
		'& > div': {
			width: '100%',
		},
		[theme.breakpoints.down(1025)]: {
			margin: '0 0 7px 0',
			width: '100%',
			'& > div': {
				'& > div': {
					'& > *:first-child': {
						fontSize: '18px',
						lineHeight: '21px',
						fontWeight: 600,
					},
					'& > *:last-child': {
						fontSize: '14px',
						lineHeight: '17px',
					}
				}
			},
		},
		[theme.breakpoints.down(351)]: {
			'& > div': {
				'& > div': {
					'& > *:first-child': {
						fontSize: '14px',
						lineHeight: '16px',
					},
					'& > *:last-child': {
						fontSize: '12px',
						lineHeight: '15px',
					}
				}
			},
		}
	}));

	return {
		ListMUI,
		ItemMUI,
		WrapperMUI,
	};
};
