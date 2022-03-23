import React, {FC} from 'react';
import {Button, ButtonProps} from '@mui/material';

import {useButtonUIStyle} from './style';

const ButtonUI: FC<ButtonProps> = (props) => {

	const {ButtonStyle} = useButtonUIStyle();

	return (
		<Button
			sx={ButtonStyle}
			{...props}
		>
			{props.children}
		</Button>
	);
};

export default ButtonUI;
