import {Link, styled} from '@mui/material';

export const usePackageItemStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		[theme.breakpoints.down(769)]: {
			paddingBottom: '5px',
			borderBottom: '1px solid #C4C4C4',
			marginBottom: '15px',
		}
	}));

	const TextMUI = styled('h2')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
			marginRight: '10px',
		}
	}));

	const TrackNumberContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'flex-end',
		marginLeft: '20px',
		[theme.breakpoints.down(769)]: {
			marginLeft: '0px',
		}
	}));

	const TrackNumberMUI = styled('p')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		maxWidth: '200px',
		wordWrap: 'break-word',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '19px',
			marginRight: '10px',
		}
	}));

	const TrackNumberLinkMUI = styled(Link)(() => ({
		display: 'flex',
		textDecoration: 'none',
	}));

	const TrackNumberLinkTextMUI = styled('div')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 400,
		marginLeft: '10px',
		color: '#274D82',
		cursor: 'pointer',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '19px',
			marginLeft: 0,
		}
	}));

	const TrackNumberIconMUI = styled(Link)(({theme}) => ({
		marginLeft: '10px',
		width: '24px',
		height: '24px',
		[theme.breakpoints.down(769)]: {
			marginLeft: '1px',
			width: '19px',
			height: '19px',
		}
	}));

	const TitleMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '25px',
		[theme.breakpoints.down(769)]: {
			marginBottom: '15px',
			marginRight: '10px',
		}
	}));

	const TitleTextMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
	}));

	const StatusTextMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#274D82',
		marginLeft: '16px',
		[theme.breakpoints.down(769)]: {
			fontSize: '12px',
			lineHeight: '14px',
			marginLeft: '0px',
		}
	}));

	const OrdersContainerMUI = styled('div')(() => ({
	}));

	const AddressContainerMUI = styled('div')(({theme}) => ({
		margin: '15px 0px',
		marginLeft: '190px',
		[theme.breakpoints.down(769)]: {
			margin: '10px 0 10px 105px',
		},
		[theme.breakpoints.down(501)]: {
			marginLeft: '50px',
		}
	}));

	const AddressRowMUI = styled('div')(() => ({
		display: 'flex',
		flexWrap: 'wrap',
	}));

	const AddressTextMUI = styled('span')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#000000',
		marginRight: '15px',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '20px',
		}
	}));


	return {
		TextMUI,
		TitleMUI,
		ContainerMUI,
		TitleTextMUI,
		AddressRowMUI,
		AddressTextMUI,
		StatusTextMUI,
		TrackNumberMUI,
		TrackNumberIconMUI,
		OrdersContainerMUI,
		AddressContainerMUI,
		TrackNumberLinkTextMUI,
		TrackNumberContainerMUI,
		TrackNumberLinkMUI,
	};
};
