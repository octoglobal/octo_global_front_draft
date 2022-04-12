import {styled, Typography} from '@mui/material';

export const useBlogNewsItemStyle = () => {

	const BlogNewsMUI = styled('div')(() => ({
		border: '1px solid red',

		margin: '20px 0 100px',
	}));

	const TitleMUI = styled(Typography)(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '40px',
		lineHeight: '47px',
		color: '#000000',

		marginBottom: '10px',
	}));

	const TextMUI = styled(Typography)(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
	}));

	const ImageMUI = styled('div')(() => ({
		width: '1288px',
		height: '423px',

		'& svg': {
			width: '1288px',
			height: '423px',
		}
	}));

	const LinkMUI = styled('div')(() => ({
		alignSelf: 'flex-end',
		marginTop: '30px',
		'& a': {
			color: '#274D82',
		}
	}));

	const MainTextMUI = styled('div')(() => ({
		marginTop: '33px',
	}));

	const NewsBottomMUI = styled('div')(() => ({
		// border: '1px solid blue',

		display: 'flex',
		flexDirection: 'column',
	}));

	const ButtonReadMore = {
		width: '199px',
		height: '23px',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#274D82',
		backgroundColor: '#fff'
	};

	return {
		BlogNewsMUI,
		TitleMUI,
		TextMUI,
		ImageMUI,
		NewsBottomMUI,
		LinkMUI,
		MainTextMUI,
		ButtonReadMore
	};
};
