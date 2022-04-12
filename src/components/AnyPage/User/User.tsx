import React, {FC, useMemo} from 'react';
import {Avatar} from '@mui/material';

import {useUserStore} from '../../../hooks/useUserStore';
import {useCustomSize, useCustom800} from '../../../hooks/useMedia';
import {ellipsis} from '../../../lib/services/services';

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
		() => isCustomSize ? 4 : (isCustom800 ? 6 : 11),
		[isCustomSize, isCustom800]
	);

	console.log('cutFio: ', cutFio);

	const {
		user: {
			name, surname
		}
	} = useUserStore();

	return (
		<UserUI>
			<UserAvatarUI>
				<Avatar sx={{
					bgcolor: '#274D82'
				}} />
			</UserAvatarUI>
			<UserFIOUI>{cutFio ? ellipsis(name, ellipsisScale) : name} {cutFio ? ellipsis(surname, ellipsisScale) : surname}</UserFIOUI>
		</UserUI>
	);
};

export default React.memo(User);
