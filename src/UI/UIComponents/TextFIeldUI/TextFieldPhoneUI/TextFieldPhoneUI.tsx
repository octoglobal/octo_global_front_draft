import React, {FC, KeyboardEventHandler, useMemo, useState} from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import {Controller, ControllerProps} from 'react-hook-form';
// import InputMask from 'react-input-mask';

import {useTextFieldUIStyle} from '../style';
import PhoneMask from '@/lib/services/services';

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
const TextFieldPhoneUI: FC<ITextFieldUIProps> = ({controller, inputProps, iconProps}) => {

	const {
		TextFieldUI,
		TextFieldStyle,
		IconUI
	} = useTextFieldUIStyle();

	const hasIconProps = useMemo(
		() => typeof iconProps !== 'undefined',
		[iconProps]
	);

	const handlerIconClick = () => {
		if(hasIconProps) {
			iconProps?.onClick();
			setIconActive(prevState => !prevState);
		}
	};

	const [iconActive, setIconActive] = useState(false);

	const IconComponent = (iconActive ? iconProps?.defaultIcon : iconProps?.activeIcon) as React.ElementType;

	return (
		<TextFieldUI>
			<Controller
				name={controller.name}
				control={controller.control}
				defaultValue={controller.defaultValue}
				rules={controller.rules}
				render={({field: {value, onChange}, fieldState: {error}}) => (
					// <InputMask
					// 	mask="+7 999 999 99 99"
					// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// 	// @ts-ignore:next-line
					// 	maskChar=" "
					// 	value={value}
					// 	onChange={onChange}
					// >
					// 	{ () => (
					<TextField
						sx={TextFieldStyle}
						{...inputProps}
						value={value}
						// onChange={(e) => onChange(e.target.value)}
						onChange={(e) => PhoneMask(e, value, onChange)}
						onKeyDown={(e : React.KeyboardEvent<HTMLInputElement>) => {
							if(e.key === 'Backspace' && value.length === 3) {
								onChange('');
							}
						}}
						helperText={error ? error.message ? error.message : inputProps?.helperText : ''}
						// helperText={inputProps?.helperText || error ? error.message ? error.message : inputProps?.helperText : ''}
						error={!!error}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					// 	)}
					// </InputMask>
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

export default React.memo(TextFieldPhoneUI);
