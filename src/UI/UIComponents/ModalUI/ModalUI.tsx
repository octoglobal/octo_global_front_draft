import React, { FC } from 'react';
import { Dialog, DialogProps } from '@mui/material';
import { useModalUIStyles } from './style';

export interface IModalUIProps {
	dialogProps: DialogProps;
	title: string;
	children?: React.ReactChildren | React.ReactNode;
}

const ModalUI: FC<IModalUIProps> = (
	{
		dialogProps,
		children,
		title
	}
) => {


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
		</DialogMUI>
	);
};

const {
	DialogMUI,
	DialogBodyMUI,
	DialogTitleMUI
} = useModalUIStyles();

export default React.memo(ModalUI);
