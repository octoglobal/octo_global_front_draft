import React, {FC} from 'react';
import {styled} from '@mui/material';

import OctoGlobal from '@/UIIcon/OctoGlobal.svg';
import OctoGlobalTextIcon from '@/UIIcon/OctoGlobalTextIcon.svg';

const OctoIconsUI = styled('span')(() => ({
	width: 'auto',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'baseline',
	// visibility: 'hidden',
	visibility: 'visible',

	'& svg': {
		cursor: 'pointer',
	},

	'& svg:first-child': {
		marginRight: '6px',
	}
}));

const LogotipMain : FC = () => {

	const handlerPushHome = () => {
		// pushTo('/');
	};

	return (
		<OctoIconsUI
			onClick={handlerPushHome}
		>
			<OctoGlobal />
			<OctoGlobalTextIcon />
		</OctoIconsUI>
	);
};

export default React.memo(LogotipMain);
