import React, {FC, useMemo} from 'react';
import {ButtonProps, DialogProps} from '@mui/material';
import { useModalUIStyles } from './style';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
	defaultStylesButton?: boolean;
	buttonProps?: ButtonProps;
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title,
		defaultStylesButton = true,
		buttonProps = {},
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
		<DialogMUI {...dialogProps}>
			<DialogTitleMUI>
				{title}
			</DialogTitleMUI>
			{children && (
				<DialogBodyMUI>
					{children}
				</DialogBodyMUI>
			)}
			<ButtonContainer>
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
