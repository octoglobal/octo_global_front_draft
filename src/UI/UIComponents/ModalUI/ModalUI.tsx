import React, {FC, useMemo} from 'react';
import { ButtonProps, DialogProps, SxProps } from '@mui/material';
import { useModalUIStyles } from './style';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
	defaultStylesButton?: boolean;
	buttonProps?: ButtonProps;
	containerStyles?: SxProps
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title,
		defaultStylesButton = true,
		buttonProps = {},
		containerStyles = {}
	}
) => {

	const handleClickButton = () => {
		if (dialogProps?.onClose) {
			dialogProps.onClose('', 'escapeKeyDown');
		}
	};

	const ButtonContainer = useMemo(() => {
		if (defaultStylesButton) return ButtonContainerMUI;
		return React.Fragment;
	}, [defaultStylesButton]);

	return (
		<DialogMUI {...dialogProps} disableScrollLock>
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
	ButtonContainerMUI,
} = useModalUIStyles();

export default React.memo(ModalUI);
