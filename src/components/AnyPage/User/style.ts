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

	const UserFIOUI = styled('div')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		maxWidth: '165px',
		lineHeight: '21px',
		textAlign: 'center',
		color: '#000000',

		whiteSpace:   'nowrap',	  /* Текст не переносится */
		overflow: 	  'hidden',	  /* Обрезаем всё за пределами блока */
		textOverflow: 'ellipsis', /* Добавляем многоточие */

		[theme.breakpoints.down(600)]: {
			maxWidth: 	  '460px',
			whiteSpace:   'wrap',	  /* Текст не переносится */
			// overflow: 	  'visible',	  /* Обрезаем всё за пределами блока */
			textOverflow: 'clip', /* Добавляем многоточие */
		}
		
	}));

	return {
		UserUI,
		UserAvatarUI,
		UserFIOUI
	};
};
