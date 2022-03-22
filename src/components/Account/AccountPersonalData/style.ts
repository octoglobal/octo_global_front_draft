import {styled} from '@mui/material';

export const useAccountPersonalDataStyle = () => {

	const PersonalDataWrapper = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'row',

		border: '1px solid pink',
	}));

	return {
		PersonalDataWrapper
	};
};
