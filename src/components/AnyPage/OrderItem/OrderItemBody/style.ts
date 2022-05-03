import {Link, styled} from '@mui/material';

export const useOrderItemBodyStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		marginLeft: '55px',
		[theme.breakpoints.down(769)]: {
			marginLeft: 0,
		}
	}));

	const IconMUI = styled('div')(({theme}) => ({
		width: '95px',
		height: '72px',
		marginRight: '43px',
		minWidth: '95px',
		minHeight: '72px',
		[theme.breakpoints.down(769)]: {
			marginRight: '10px',
		},
		[theme.breakpoints.down(501)]: {
			width: '40px',
			height: '40px',
			minWidth: '40px',
			minHeight: '40px',
		}
	}));

	const TextMUI = styled('div')(({theme}) => ({
		maxWidth: '425px',
		[theme.breakpoints.down(601)]: {
			maxWidth: '80%',
		}
	}));

	const TitleMUI = styled('h5')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		wordWrap: 'break-word',
		fontWeight: 400,
		marginBottom: '15px',
		color: '#000000',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
			marginBottom: '5px'
		}
	}));

	const LinkContainerMUI = styled('div')(({theme}) => ({
		marginBottom: '15px',
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down(769)]: {
			marginBottom: '5px',
		}
	}));

	const TrackNumberMUI = styled('div')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		wordWrap: 'break-word',
		fontWeight: 400,
		maxWidth: '100%',
		color: '#000000',
		marginRight: '15px',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
			marginRight: '9px',
		}
	}));

	const LinkMUI = styled(Link)(({theme}) => ({
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
		},
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
			'& > a': {
				'& > svg': {
					width: '16px',
					height: '19px',
					marginLeft: '3px',
				}
			},
		}
	}));

	const CommentMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		wordWrap: 'break-word',
		color: '#000000',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
		}
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
