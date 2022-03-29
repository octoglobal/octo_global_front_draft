import React, {FC} from 'react';
import {Avatar} from '@mui/material';

import {useUserStore} from '../../../hooks/useUserStore';

import {useUserStyle} from './style';


const User : FC = () => {

	const {
		UserUI,
		UserAvatarUI,
		UserFIOUI
	} = useUserStyle();

	const {
		user: {
			name, surname
		}
	} = useUserStore();

	return (
		<UserUI>
			<UserAvatarUI>
				<Avatar />
			</UserAvatarUI>
			<UserFIOUI>{name} {surname}</UserFIOUI>
		</UserUI>
	);
};

export default React.memo(User);
