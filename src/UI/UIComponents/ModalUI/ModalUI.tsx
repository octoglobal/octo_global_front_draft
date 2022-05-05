import React, {FC, useEffect, useMemo} from 'react';
import { ButtonProps, DialogProps, SxProps } from '@mui/material';
import { useModalUIStyles } from './style';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
	defaultStylesButton?: boolean;
	buttonProps?: ButtonProps;
	containerStyles?: SxProps
	closeTime?: number;
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title,
		defaultStylesButton = true,
		buttonProps = {},
		containerStyles = {},
		closeTime = 0
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
			setTimeout(() => {
				handleCloseDialog();
			}, closeTime * 1000);
		}
	}, [closeTime, dialogProps.open]);

	return (
		<DialogMUI
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
		</DialogMUI>
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
