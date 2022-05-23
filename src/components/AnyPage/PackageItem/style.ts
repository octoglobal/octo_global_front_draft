import {Link, styled} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';




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
		marginLeft: '193px',
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

	const OrdersDitailsContainerMUI = styled('div')(({theme}) => ({
		marginTop: '30px',
		marginBottom: 20,
		marginLeft: 194,
		display: 'flex',
		flexDirection: 'column',
		borderBottom: '2px solid #C4C4C4',
		[theme.breakpoints.down(750)]:{
			marginLeft: 0,
			borderBottom: 'none',
		},
		[theme.breakpoints.down(500)]:{
			
			marginTop: '0px',
			marginBottom: 0,
			
		}
		
	}));


	const OrdersLineContainerMUI = styled('div')(({theme}) => ({		
		display: 'flex',
		alignItems: 'center',
		marginBottom: 14,
		[theme.breakpoints.down(500)]:{
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gridTemplateAreas:
				`
				"a a"
				"b b"
				`
		}
			
	}));

	const OrdersLineItemContainerMUI = styled('div')(({theme}) => ({		
		fontSize: 20,
		fontWeight: 400,
		marginRight: '32px',
		maxWidth: '220px',
		minWidth: 220,
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',

		'&:nth-child(2)':{
			[theme.breakpoints.down(500)]:{
			
				textAlign: 'end',
	
			},
		},

		[theme.breakpoints.down(1220)]:{
			maxWidth: '200px',
			minWidth: 200,
		},
		// [theme.breakpoints.down(1180)]:{
		// 	maxWidth: '180px',
		// 	minWidth: 180,
		// },
		[theme.breakpoints.down(1180)]:{
			maxWidth: '150px',
			minWidth: 150,
		},
		[theme.breakpoints.down(500)]:{
			fontSize: '16px',
			// textAlign: 'end',

		},
	}));
	const OrdersLineItemTrackContainerMUI = styled('div')(({theme}) => ({		
		fontSize: 18,
		fontWeight: 500,
		[theme.breakpoints.down(500)]:{
			fontSize: 12,
			color: '#C4C4C4',
		}
		
	}));
	const ListItemButtonMUI = styled(ListItemButton)(({theme}) => ({		
		padding: 0,
		maxWidth: 24,
		marginLeft: 23,
		
		'&:hover':{
			background: 'none',
		},
		[theme.breakpoints.down(500)]:{
			marginRight: 30,
		}

	}));
	const FlexEndMUI = styled('div')(() => ({		
		display: 'flex',
	
		
		

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
		OrdersDitailsContainerMUI,
		AddressContainerMUI,
		TrackNumberLinkTextMUI,
		TrackNumberContainerMUI,
		TrackNumberLinkMUI,
		OrdersLineContainerMUI,
		OrdersLineItemContainerMUI,
		OrdersLineItemTrackContainerMUI,
		ListItemButtonMUI,
		FlexEndMUI
	};
};
