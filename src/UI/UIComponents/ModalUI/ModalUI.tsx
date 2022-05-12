import React, {FC, useEffect, useMemo} from 'react';
import {ButtonProps, DialogProps, SxProps, Theme} from '@mui/material';
import { useModalUIStyles } from './style';
import {StyledComponent} from '@emotion/styled';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
	defaultStylesButton?: boolean;
	buttonProps?: ButtonProps;
	containerStyles?: SxProps;
	closeTime?: number;
	DialogContainerMUI?: StyledComponent<DialogProps>;
	buttonText?: string;
	titleStyle?: SxProps;
	buttonClick?: () => void;
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title,
		defaultStylesButton = true,
		buttonProps = {},
		titleStyle = {},
		containerStyles = {},
		closeTime = 0,
		DialogContainerMUI = DialogMUI,
		buttonText = 'Отлично',
		buttonClick
	}
) => {


	const handleCloseDialog = () => {
		if (dialogProps?.onClose) {
			if (buttonClick) {
				buttonClick();
			} else {
				dialogProps.onClose('', 'escapeKeyDown');
			}
		}
	};

	const handleClickButton = () => {
		handleCloseDialog();
	};

	const ButtonContainer = useMemo(() => {
		if (defaultStylesButton) return ButtonContainerMUI;
		return React.Fragment;
	}, [defaultStylesButton]);

	useEffect(() => {
		if (closeTime && dialogProps?.open) {
			const handleTimeoutClose = setTimeout(() => {
				handleCloseDialog();
			}, closeTime * 1000);
			return () => {
				clearTimeout(handleTimeoutClose);
			};
		}
	}, [closeTime, dialogProps.open]);

	return (
		<DialogContainerMUI
			{...dialogProps}
			disableScrollLock={false}
			BackdropComponent={BackDropBlurMUI}
		>
			<DialogTitleMUI sx={titleStyle}>
				{title}
			</DialogTitleMUI>
			{children && (
				<DialogBodyMUI>
					{children}
				</DialogBodyMUI>
			)}
			<ButtonContainer sx={containerStyles}>
				<ButtonMUI
					onClick={handleClickButton}
					{...buttonProps}
				>
					{buttonText}
				</ButtonMUI>
			</ButtonContainer>
		</DialogContainerMUI>
	);
};



const {
	ButtonMUI,
	DialogMUI,
	DialogBodyMUI,
	DialogTitleMUI,
	BackDropBlurMUI,
	ButtonContainerMUI,
} = useModalUIStyles();

export default React.memo(ModalUI);
