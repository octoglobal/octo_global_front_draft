import React, {FC} from 'react';
import {Avatar} from '@mui/material';
import {useUserStyle} from './style';
import {useUser} from '@/components/AnyPage/User/useUser';

interface IUser {
	cutFio?:boolean;
	isChangeToAdmin?: boolean;
}

const User : FC<IUser> = (
	{
		cutFio = true,
		isChangeToAdmin = false
	}
) => {

	const {
		userName,
		userSurname,
		ellipsisScale,
	} = useUser(isChangeToAdmin);

	return (
		<UserUI>
			<UserAvatarUI>
				<Avatar sx={{
					bgcolor: '#274D82'
				}} />
			</UserAvatarUI>
			<UserFIOUI>
				{ellipsisScale && cutFio ? userName : (
					`${userName} ${userSurname}`
				)}
			</UserFIOUI>
		</UserUI>
	);
};

const {
	UserUI,
	UserAvatarUI,
	UserFIOUI
} = useUserStyle();

export default React.memo(User);
