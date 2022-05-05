import { styled } from '@mui/material';

export const useAddressListStyles = () => {

	const ListMUI = styled('div')(({theme}) => ({
		[theme.breakpoints.down(501)]: {
			'& > button:last-child': {
				marginBottom: '0px',
			}
		}
	}));

	return {
		ListMUI,
	};
};
