import React, {FC, useMemo} from 'react';
import {ButtonProps, SxProps} from '@mui/material';

import {useMobile} from '@/hooks/useMedia';

import {useButtonUIStyle} from './style';

const ButtonUI : FC<ButtonProps> = (props) => {

	const {isMobile} = useMobile();

	const {
		CustonButtonUI,
		ButtonStyle,
		ButtonMobileStyle
	} = useButtonUIStyle();

	const buttonStyle = useMemo(() => {
		const propsStyles = props?.sx ? props.sx : {};
		const adaptiveStyles = isMobile ? ButtonMobileStyle : ButtonStyle
		return {
			...adaptiveStyles,
			...propsStyles
		};
	}, [isMobile]);

	return (
		<CustonButtonUI
			{...props}
			sx={buttonStyle as SxProps}
		>
			{props.children}
		</CustonButtonUI>
	);
};

export default ButtonUI;
