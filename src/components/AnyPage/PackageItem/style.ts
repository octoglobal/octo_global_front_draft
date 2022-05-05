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
		}
	}));

	const TrackNumberMUI = styled('span')(() => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		marginLeft: '20px',
		color: '#000000',
	}));

	const TrackNumberLinkMUI = styled(Link)(() => ({
		display: 'flex',
		textDecoration: 'none',
	}));

	const TrackNumberLinkTextMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 400,
		marginLeft: '10px',
		color: '#274D82',
		cursor: 'pointer',
	}));

	const TrackNumberIconMUI = styled(Link)(() => ({
		marginLeft: '10px',
		width: '24px',
		height: '24px',
	}));

	const TitleMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '25px',
		[theme.breakpoints.down(769)]: {
			marginBottom: '15px',
		}
	}));

	const TitleTextMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
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
			marginLeft: '10px',
		}
	}));

	const OrdersContainerMUI = styled('div')(() => ({
	}));

	const AddressContainerMUI = styled('div')(() => ({
		margin: '15px 0px',
		marginLeft: '190px',
	}));

	const AddressRowMUI = styled('div')(() => ({
		display: 'flex',
	}));

	const AddressTextMUI = styled('span')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#000000',
		marginRight: '15px',
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
		TrackNumberLinkMUI,
	};
};
