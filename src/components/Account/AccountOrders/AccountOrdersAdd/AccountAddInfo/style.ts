import { styled } from '@mui/material';

export const useAccountAddInfoStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		marginLeft: '25px',
		[theme.breakpoints.down(1025)]: {
			marginLeft: '0px',
		}
	}));

	const TextMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		color: '#000000',
		maxWidth: '320px',
		[theme.breakpoints.down(1210)]: {
			fontSize: '16px',
			lineHeight: '19px',
			maxWidth: '300px',
		},
		[theme.breakpoints.down(1025)]: {
			maxWidth: '303px',
		},
		[theme.breakpoints.down(360)]: {
			fontSize: '14px',
			lineHeight: '17px',
			maxWidth: '250px',
		}
	}));


	const TextPartOneSpanMUI = styled('span')(({theme}) => ({
		[theme.breakpoints.down(1025)]: {
			display: 'block',
		}
	}));

	const EmailLinkMUI = styled('a')(({theme}) => ({
		display: 'block',
		fontSize: 'inherit',
		lineHeight: 'inherit',
		fontWeight: 'inherit',
		color: '#274D82',
		[theme.breakpoints.down(1025)]: {
			display: 'inline',
		}
	}));

	const DotTextSpanMUI = styled('span')(() => ({
		color: '#000000',
	}));

	const IconMUI = styled('div')(({theme}) => ({
		marginRight: '20px',
		'& > svg': {
			width: '34px',
			height: '34px',
		},
		[theme.breakpoints.down(1210)]: {
			marginRight: '11px',
			'& > svg': {
				width: '31px',
				height: '31px',
			},
		},
	}));


	return {
		IconMUI,
		TextMUI,
		EmailLinkMUI,
		ContainerMUI,
		DotTextSpanMUI,
		TextPartOneSpanMUI,
	};
};
