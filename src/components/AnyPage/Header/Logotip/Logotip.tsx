import React, {FC} from 'react';
import {styled} from '@mui/material';

import {useCustomRouter} from '../../../../hooks/useCustomRouter';

import OctoGlobal from '../../../../UI/UIIcon/OctoGlobal.svg';
import OctoGlobalTextIcon from '../../../../UI/UIIcon/OctoGlobalTextIcon.svg';

const OctoIconsUI = styled('span')(() => ({
	width: 'auto',

	display: 'flex',
	flexDirection: 'row',
	alignItems: 'baseline',

	'& svg': {
		cursor: 'pointer',
	},

	'& svg:first-child': {
		marginRight: '6px',
	}
}));

const Logotip: FC = () => {

	const {pushTo} = useCustomRouter();

	const handlerPushHome = () => {
		pushTo('/');
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

export default React.memo(Logotip);
