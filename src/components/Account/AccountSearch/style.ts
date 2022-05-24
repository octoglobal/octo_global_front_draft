import { styled } from '@mui/material';

export const useAccountSearchStyles = () => {

	const SearchContainerMUI = styled('div')(({theme}) => ({
		maxWidth: '976px',
		margin: '0 auto 42px',
		[theme.breakpoints.down(600)]:{
			margin: '0px 0 20px 0',
		}
	}));

	return {
		SearchContainerMUI
	};
};
