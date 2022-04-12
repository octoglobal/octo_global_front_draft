import React, {FC, useMemo} from 'react';
import {Avatar} from '@mui/material';

import {useUserStore} from '../../../hooks/useUserStore';
import {useCustomSize, useCustom800} from '../../../hooks/useMedia';

import {useUserStyle} from './style';

interface IUser {
	cutFio?:boolean
}

const User : FC<IUser> = ({cutFio = true}) => {

	const {
		UserUI,
		UserAvatarUI,
		UserFIOUI
	} = useUserStyle();

	const {isCustomSize} = useCustomSize(680);
	const {isCustom800} = useCustom800();

	const ellipsisScale = useMemo(
		() => isCustomSize || isCustom800 ? true : false,
		[isCustomSize, isCustom800]
	);

	const {
		user: {
			name, surname
		}
	} = useUserStore();

	// console.log('cutFio: ', cutFio);

	return (
		<UserUI>
			<UserAvatarUI>
				<Avatar sx={{
					bgcolor: '#274D82'
				}} />
			</UserAvatarUI>
			{/*<UserFIOUI>{cutFio ? ellipsis(name, ellipsisScale) : name} {cutFio ? ellipsis(surname, ellipsisScale) : surname}</UserFIOUI>*/}
			<UserFIOUI>{ellipsisScale && cutFio ? name : `${name} ${surname}`}</UserFIOUI>
		</UserUI>
	);
};

export default React.memo(User);
