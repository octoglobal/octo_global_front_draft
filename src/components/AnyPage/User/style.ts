import {styled} from '@mui/material';

export const useUserStyle = () => {

	const UserUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		cursor: 'pointer',
	}));

	const UserAvatarUI = styled('span')(() => ({
		width: '39px',
		height: '39px',
		marginRight: '9px',
	}));

	const UserFIOUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		// overflow: 'hidden',
		// width: '165px',
		lineHeight: '21px',
		textAlign: 'center',
		color: '#000000',
	}));

	return {
		UserUI,
		UserAvatarUI,
		UserFIOUI
	};
};
