import React, {FC, useEffect, useMemo} from 'react';
import {ButtonProps, DialogProps, SxProps, Theme} from '@mui/material';
import { useModalUIStyles } from './style';
import {StyledComponent} from '@emotion/styled';
import {MUIStyledCommonProps} from '@mui/system';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
	defaultStylesButton?: boolean;
	buttonProps?: ButtonProps;
	containerStyles?: SxProps;
	closeTime?: number;
	DialogContainerMUI?: StyledComponent<DialogProps>;
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title,
		defaultStylesButton = true,
		buttonProps = {},
		containerStyles = {},
		closeTime = 0,
		DialogContainerMUI = DialogMUI,
	}
) => {


	const handleCloseDialog = () => {
		if (dialogProps?.onClose) {
			dialogProps.onClose('', 'escapeKeyDown');
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
			disableScrollLock
			BackdropComponent={BackDropBlurMUI}
		>
			<DialogTitleMUI>
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
					Отлично
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
