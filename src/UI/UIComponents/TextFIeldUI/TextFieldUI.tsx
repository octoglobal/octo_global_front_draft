import React, {FC, useState, useMemo} from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import {Controller, ControllerProps} from 'react-hook-form';

import {useMobile} from '@/hooks/useMedia';

import {useTextFieldUIStyle} from './style';
interface IIconsProps {
	defaultIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	activeIcon: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	onClick: () => void;
}
interface IRegexProps {
	regex: RegExp
}

interface ITextFieldUIProps {
	controller: Omit<ControllerProps, 'render'>
	inputProps?: TextFieldProps,
	iconProps?: IIconsProps,
	regexProps?: IRegexProps,
}

const TextFieldUI: FC<ITextFieldUIProps> = ({controller, inputProps, iconProps, regexProps}) => {

	const {isMobile} = useMobile();

	const {
		TextFieldUI,
		TextFieldStyle,
		TextFieldMobileStyle,
	} = useTextFieldUIStyle();

	const hasIconProps = useMemo(
		() => typeof iconProps !== 'undefined',
		[iconProps]
	);

	const [iconActive, setIconActive] = useState(false);

	// const IconComponentActive = iconProps?.activeIcon as React.ElementType;
	// const IconComponent = iconProps?.defaultIcon as React.ElementType;

	const handlerIconClick = () => {
		if(hasIconProps) {
			iconProps?.onClick();
			setIconActive(prevState => !prevState);
		}
	};

	const handlerChange = (onChange : (value : string | number) => void) => (e : React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		if(regexProps?.regex) value = e.target.value.replace(regexProps.regex, '');
		onChange(value);
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
						// sx={TextFieldStyle}
						sx={isMobile ? TextFieldMobileStyle : TextFieldStyle}
						{...inputProps}
						value={value}
						onChange={handlerChange(onChange)}
						// onChange={onChange}
						helperText={error ? error.message ? error.message : inputProps?.helperText : ''}
						// helperText={error ? error : ( inputProps?.helperText || '' )}
						// helperText={inputProps?.helperText || error ? error.message ? error.message : inputProps?.helperText : ''}
						error={!!error}
					/>
				)}
			/>
			{/*{typeof iconProps !== 'undefined' && (*/}
			{/*	<IconUI onClick={handlerIconClick}>*/}
			{/*		{iconActive ? <IconComponent /> : <IconComponentActive/>}*/}
			{/*	</IconUI>*/}
			{/*)}*/}
		</TextFieldUI>
	);
};

export default React.memo(TextFieldUI);
