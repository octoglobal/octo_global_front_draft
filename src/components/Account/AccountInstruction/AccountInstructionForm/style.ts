import {styled} from '@mui/system';
import {Button} from '@mui/material';


export const useAccountInstuctionFormStyle = () => {
	const ContainerForm = styled('form')(() => ({
		maxWidth: '471px',
	}));

	const ContainerInputOneForm = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const ContainerInputUrl = styled('div')(() => ({
		width: '100%',
		'& > div > div > p': {
			textAlign: 'left !important',
		},
		'& > div > div > div > input': {
			minHeight: '49px'
		}
	}));

	const ContainerCounter = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		marginTop: '32px',
		marginLeft: '20px',
	}));

	const ContainerInputTitle = styled('p')(({theme}) => ({
		color: '#274D82',
		fontWeight: 400,
		fontSize: 24,
		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '16px',
		}
	}));

	const ContainerInputCounter = styled('div')(({theme}) => ({
		color: '#274D82',
		fontWeight: 400,
		fontSize: 24,
		margin: '0 6px',
	}));

	const CounterContainer = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		marginLeft: '12px',
	}));

	const CounterButton = styled(Button)(() => ({
		minWidth: 'auto',
		width: '24px',
		height: '24px',
		padding: '0 2px'
	}));

	const SendButtonContainer = styled('div')(({theme}) => ({
		marginTop: '30px',
		[theme.breakpoints.down(500)]: {
			marginTop: '15px',
		}
	}));

	const IconTooltipMUI = styled('div')(() => ({
		marginLeft: 10,
		display: 'flex',
		'&>svg':{
			width: 34,
			height: 34,
		},
	}));



	return {
		ContainerInputUrl,
		SendButtonContainer,
		CounterContainer,
		ContainerInputCounter,
		ContainerInputTitle,
		ContainerCounter,
		IconTooltipMUI,
		ContainerForm,
		CounterButton,
		ContainerInputOneForm,
	};
};
