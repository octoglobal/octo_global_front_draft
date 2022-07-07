import React, {FC, useState} from 'react';
import {IconButton, InputAdornment, TextFieldProps} from '@mui/material';
import {ControllerProps} from 'react-hook-form';

import EyeOpen from '../../../UIIcon/EyeOpen.svg';
import EyeClose from '../../../UIIcon/EyeClose.svg';
import TextFieldUI from '../TextFieldUI';
interface iconsProps {
	defaultIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	activeIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	onClick: () => void;
}
interface ITextFieldUIProps {
	controller: Omit<ControllerProps, 'render'>
	inputProps?: TextFieldProps,
	iconProps?: iconsProps
}

// TODO: вынести типы пропсов в отдельный файл
const TextFieldPasswordUI: FC<ITextFieldUIProps> = ({controller, inputProps}) => {

	const [showPassword, setShowPassword] = useState(false);

	const handlerShowPassword = () : void => {
		setShowPassword(prevState => !prevState);
	};



	return (
		<TextFieldUI
			controller={{
				...controller as any
			}}
			inputProps={{
				...inputProps,
				type: showPassword ? 'text' : 'password',
				InputProps: {
					endAdornment : (
						<InputAdornment position="end">
							<IconButton
								onClick={handlerShowPassword}
							>
								{showPassword ? <EyeOpen /> : <EyeClose/>}
							</IconButton>
						</InputAdornment>
					)
				}
			}}
			iconProps={{
				defaultIcon: EyeOpen,
				activeIcon: EyeClose,
				onClick: handlerShowPassword
			}}
		/>
	);
};

export default React.memo(TextFieldPasswordUI);
