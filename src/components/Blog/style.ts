import {styled} from '@mui/material';

export const useBlogPageStyle = () => {

	const BlogMUI = styled('div')(() => ({
		// border: '1px solid blue',
		marginTop: '120px',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}));

	const ButtonLoadMore = {
		width: '200px',
		height: '23px',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
		backgroundColor: '#fff',
	};

	return {
		BlogMUI,
		ButtonLoadMore
	};
};
