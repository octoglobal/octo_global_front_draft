import React, {FC} from 'react';
import {Button, ButtonProps} from '@mui/material';

const ButtonUI: FC<ButtonProps> = (props) => {
	return (
		<Button {...props}>
			{props.children}
		</Button>
	);
};

export default ButtonUI;
