import { styled } from '@mui/material';

export const useReviewsAuthPlugStyles = () => {

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

	return {
		ReviewPlugContentMUI
	};
};
