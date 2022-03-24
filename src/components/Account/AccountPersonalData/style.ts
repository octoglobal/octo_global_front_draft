import {styled} from '@mui/material';

export const useAccountPersonalDataStyle = () => {

	const PersonalDataWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
		padding: '60px 80px',

		display: 'flex',
		flexDirection: 'row',

		border: '1px solid purple',
	}));

	return {
		PersonalDataWrapperUI
	};
};
