import React, {FC, useState} from 'react';
import {TextFieldProps} from '@mui/material';
import {ControllerProps} from 'react-hook-form';

import TextFieldUI from '../TextFieldUI';

interface iconsProps {
	defaultIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	activeIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	(onClick: never): void;
}

interface ITextFieldUIProps {
	controller: Omit<ControllerProps, 'render'>
	inputProps?: TextFieldProps,
	iconProps?: iconsProps
}

// TODO: вынести типы пропсов в отдельный файл
const TextFieldPasswordUI: FC<ITextFieldUIProps> = ({controller, inputProps, iconProps}) => {

	const [showPassword, setShowPassword] = useState(false);

	const handlerShowPassword = () : void => {
		setShowPassword(prevState => !prevState);
	};

	return (
		<TextFieldUI
			controller={{
				...controller
			}}
			inputProps={{
				...inputProps,
				type: showPassword ? 'text' : 'password'
			}}
			iconProps={{
				...iconProps,
				onClick: handlerShowPassword,
			}}
		/>
	);
};

export default React.memo(TextFieldPasswordUI);
