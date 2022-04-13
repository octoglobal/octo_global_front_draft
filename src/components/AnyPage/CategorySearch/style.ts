import {styled, TextField} from '@mui/material';

export const useCategorySearchStyles = () => {

	const SearchContainerMUI = styled('div')(() => ({
		marginBottom: '5px',
		'& > div': {
			display: 'flex',
			justifyContent: 'center',
		},
	}));

	const TextFieldSearch = styled(TextField)(() => ({
		'& > div > input': {
			padding: '15px 25px'
		}
	}));

	return {
		TextFieldSearch,
		SearchContainerMUI
	};
};
