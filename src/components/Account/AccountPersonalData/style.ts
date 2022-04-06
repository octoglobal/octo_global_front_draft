import {styled} from '@mui/material';

export const useAccountPersonalDataStyle = () => {

	const PersonalDataWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		minHeight: 'calc(100vh - 61px)',
		height: '100%',
		padding: '60px 0px',

		display: 'flex',
		flexDirection: 'row',

		[theme.breakpoints.down(1390)]: {
			padding: '0',
			flexDirection: 'column',
		},

		[theme.breakpoints.down(1024)]: {
			padding: '0',
			flexDirection: 'column',
		},

		[theme.breakpoints.down(500)]: {
			padding: '0',
			flexDirection: 'column',
		}
	}));

	return {
		PersonalDataWrapperUI
	};
};
