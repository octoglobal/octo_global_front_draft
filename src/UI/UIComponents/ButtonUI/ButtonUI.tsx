import React, {FC} from 'react';
import {ButtonProps} from '@mui/material';

import {useMobile} from '@/hooks/useMedia';

import {useButtonUIStyle} from './style';

const ButtonUI : FC<ButtonProps> = (props) => {

	const {isMobile} = useMobile();

	const {
		CustonButtonUI,
		ButtonStyle,
		ButtonMobileStyle
	} = useButtonUIStyle();

	return (
		<CustonButtonUI
			{...props}
			sx={isMobile ? ButtonMobileStyle: ButtonStyle}
		>
			{props.children}
		</CustonButtonUI>
	);
};

export default ButtonUI;
