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

	return {
		TextFieldSearch,
		SearchContainerMUI,
		SearchContainerWrapperMUI,
		EuroPositionMUI
	};
};
