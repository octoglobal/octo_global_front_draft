import { styled } from '@mui/material';

export const useReviewsAuthPlugStyles = () => {

	const PlugWrapperMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',

		'& button': {
			marginTop: '12px',
			alignSelf: 'flex-end'
		}
	}));

	const ReviewPlugContentMUI = styled('div')(() => ({
		border: '1px solid #DFE4EC',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#C4C4C4',

		width: '100%',
		height: '49px',
		padding: '15px'
	}));

	const buttonSignUpStyle = {
		width: '154px',
		height: '32px',
		background: '#274D82',
		opacity: '0.8',
		borderRadius: '3px',
	};

	return {
		PlugWrapperMUI,
		ReviewPlugContentMUI,
		buttonSignUpStyle
	};
};
