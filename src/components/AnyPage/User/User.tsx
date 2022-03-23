import React, {FC} from 'react';
import {Avatar} from '@mui/material';
import {useUserStyle} from './style';

interface IUser {
	name: string,
	surname: string
}

const User : FC<IUser> = ({name, surname}) => {

	const {
		UserUI,
		UserAvatarUI,
		UserFIOUI
	} = useUserStyle();

	return (
		<UserUI>
			<UserAvatarUI>
				<Avatar />
				{/*<Avatar>{name} {surname}</Avatar>*/}
			</UserAvatarUI>
			<UserFIOUI>{name} {surname}</UserFIOUI>
		</UserUI>
	)
}

export default React.memo(User)
