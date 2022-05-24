import {styled, TextField} from '@mui/material';

export const useCategorySearchStyles = () => {
	
	const SearchContainerWrapperMUI = styled('div')(() => ({
		position: 'relative'
	}));
	
	const EuroPositionMUI = styled('div')(() => ({
		// position: 'absolute',
		// top: 8,
		// left: -210
		marginBottom: 20
	}));
	const SearchContainerMUI = styled('div')(({theme}) => ({
		marginBottom: '5px',
		'& > div': {
			display: 'flex',
			justifyContent: 'center',
		},
		[theme.breakpoints.down(1025)]: {
			marginBottom: '3px',
		},
		[theme.breakpoints.down(600)]: {
			marginBottom: '15px',
		}
	}));

	const TextFieldSearch = styled(TextField)(({theme}) => ({
		'& > div > input': {
			padding: '15px 25px'
		},
		[theme.breakpoints.down(1025)]: {
			'& > div > input': {
				padding: '9px 19px',
				borderRadius: '5px',
				fontSize: '16px',
			},
		}
	}));
	const DropDownWrapperMUI = styled('div')(() => ({
		'& > div': {
			'& > button': {
				padding: 0,
				margin: '0 0 0 5px !important',
			},
			'& > div': {
				'& > button': {
					margin: '0 !important',
				}
			}
		}
	}));
	const SearchWrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',
		
		[theme.breakpoints.down(600)]:{
			flexDirection: 'column',
		
		},	
		'&>div':{			
			'&:nth-child(1)':{
				width: '100%',
				marginRight: 25	,
				[theme.breakpoints.down(600)]:{
					marginRight: 0	
				}			
			},
			
		},
	}));

	

	return {
		TextFieldSearch,
		SearchContainerMUI,
		SearchContainerWrapperMUI,
		EuroPositionMUI,
		DropDownWrapperMUI,
		SearchWrapperMUI,
	};
};
