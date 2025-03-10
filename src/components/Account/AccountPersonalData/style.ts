import {styled} from '@mui/material';

export const useAccountPersonalDataStyle = () => {

	const PersonalDataWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		// minHeight: 'calc(100vh - 61px)',
		// minHeight: '805px',
		height: '100%',
		padding: '62px 0px 135px',

		display: 'flex',
		flexDirection: 'row',

		[theme.breakpoints.down(1390)]: {
			padding: '0 0 50px',
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
	const AccountLocationsMUI = styled('div')(() => ({
		// border: '1px solid red',
	}));


	return {
		PersonalDataWrapperUI,
		AccountLocationsMUI
	};
};
