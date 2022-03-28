import React, {FC} from 'react';
import {Button, ButtonProps} from '@mui/material';

import {useButtonUIStyle} from './style';

const ButtonUI: FC<ButtonProps> = (props) => {

	const {ButtonStyle} = useButtonUIStyle();

	return (
		<Button
			{...props}
			sx={ButtonStyle}
		>
			{props.children}
		</Button>
	);
};

export default ButtonUI;
