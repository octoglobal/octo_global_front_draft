import React, {FC, useMemo} from 'react';
import {DialogProps} from '@mui/material';
import { useModalUIStyles } from './style';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
	defaultStylesButton?: boolean;
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title,
		defaultStylesButton = true,
	}
) => {

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
				<ButtonMUI onClick={dialogProps.onClose as () => void}>
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
