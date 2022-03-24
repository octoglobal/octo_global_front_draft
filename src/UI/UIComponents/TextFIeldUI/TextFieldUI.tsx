import React, {FC, useState, useMemo} from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import {Controller, ControllerProps} from 'react-hook-form';

// import {isObjectEmpty} from '../../../lib/services/services';

import {useTextFieldUIStyle} from './style';
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

const TextFieldUI: FC<ITextFieldUIProps> = ({controller, inputProps, iconProps}) => {

	const {
		TextFieldUI,
		TextFieldStyle,
		IconUI
	} = useTextFieldUIStyle();

	const hasIconProps = useMemo(
		() => typeof iconProps !== 'undefined',
		[iconProps]
	);

	const [iconActive, setIconActive] = useState(false);

	const IconComponent = iconActive ? iconProps?.defaultIcon : iconProps?.activeIcon;

	const handlerIconClick = () => {
		if(hasIconProps) {
			iconProps.onClick();
			setIconActive(prevState => !prevState);
		};
	};

	return (
		<TextFieldUI>
			<Controller
				name={controller.name}
				control={controller.control}
				defaultValue={controller.defaultValue}
				rules={controller.rules}
				render={({field: {value, onChange}, fieldState: {error}}) => (
					<TextField
						sx={TextFieldStyle}
						{...inputProps}
						value={value}
						onChange={(e) => onChange(e.target.value)}
						helperText={error ? error.message ? error.message : inputProps?.helperText : ''}
						// helperText={inputProps?.helperText || error ? error.message ? error.message : inputProps?.helperText : ''}
						error={!!error}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				)}
			/>
			{typeof iconProps !== 'undefined' && (
				<IconUI onClick={handlerIconClick}>
					<IconComponent />
				</IconUI>
			)}
		</TextFieldUI>
	);
};

export default TextFieldUI;
