import React, {FC, useMemo} from 'react';
import {Avatar} from '@mui/material';

import {useUserStore} from '../../../hooks/useUserStore';
import {useCustomSize, useCustom800} from '../../../hooks/useMedia';
import {ellipsis} from '../../../lib/services/services';

import {useUserStyle} from './style';

const User : FC = () => {

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
			<UserFIOUI>{ellipsis(name, ellipsisScale)} {ellipsis(surname, ellipsisScale)}</UserFIOUI>
		</UserUI>
	);
};

export default React.memo(User);
