import {Link, styled} from '@mui/material';

export const useOrderItemBodyStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		marginLeft: '50px',
	}));

	const IconMUI = styled('div')(() => ({
		width: '95px',
		height: '72px',
		marginRight: '43px',
	}));

	const TextMUI = styled('div')(() => ({
		maxWidth: '425px',
	}));

	const TitleMUI = styled('h5')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		wordWrap: 'break-word',
		fontWeight: 400,
		marginBottom: '15px',
		color: '#000000',
	}));

	const LinkContainerMUI = styled('div')(() => ({
		marginBottom: '15px',
		display: 'flex',
	}));

	const TrackNumberMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		wordWrap: 'break-word',
		fontWeight: 400,
		maxWidth: '100%',
		color: '#000000',
		marginRight: '15px',
	}));

	const LinkMUI = styled(Link)(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 400,
		textDecoration: 'none',
		'& > a': {
			display: 'flex',
			alignItems: 'center',
			'& > svg': {
				marginLeft: '8px',
				width: '24px',
				height: '24px',
			}
		}
	}));

	const CommentMUI = styled('p')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		wordWrap: 'break-word',
		color: '#000000',
	}));

	return {
		IconMUI,
		TextMUI,
		LinkMUI,
		TitleMUI,
		CommentMUI,
		TrackNumberMUI,
		LinkContainerMUI,
		ContainerMUI
	};
};
