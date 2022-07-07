import React, {FC, useState, useMemo} from 'react';
import {InputAdornment, TextField, TextFieldProps} from '@mui/material';
import {Control, Controller, ControllerProps, FieldValues} from 'react-hook-form';

import {useMobile} from '@/hooks/useMedia';
import {useTextFieldUIStyle} from './style';
import EditPencil from '@/UIIcon/EditPencil.svg';

interface IIconsProps {
	visibleIcon?: boolean,
	defaultIcon?: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	activeIcon?: React.ElementType<React.ComponentPropsWithRef<'svg'>>,
	onClick?: () => void;
}

interface IRegexProps {
	regex: RegExp,
	ucFirst?: boolean
}

interface IController extends Omit<ControllerProps, 'render' | 'control'>{
	control: any;
}

interface ITextFieldUIProps {
	controller: IController;
	inputProps?: TextFieldProps,
	iconProps?: IIconsProps,
	regexProps?: IRegexProps,
}

const TextFieldUI: FC<ITextFieldUIProps> = ({controller, inputProps, iconProps, regexProps}) => {

	const {isMobile} = useMobile();

	const hasIconProps = useMemo(
		() => typeof iconProps !== 'undefined',
		[iconProps]
	);

	const [iconActive, setIconActive] = useState(false);

	const IconComponentActive = iconProps?.activeIcon as React.ElementType;
	const IconComponent = iconProps?.defaultIcon as React.ElementType;

	const handlerIconClick = () => {
		if(hasIconProps && iconProps?.onClick) {
			iconProps?.onClick();
			setIconActive(prevState => !prevState);
		}
	};

	const handlerChange = (onChange : (value : string | number) => void) => (e : React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		if(regexProps?.regex) value = e.target.value.replace(regexProps.regex, '');
		if(regexProps?.ucFirst) {
			value = e.target.value.replace(regexProps.regex, (u) => u.toUpperCase());
		}
		onChange(value);
	};

	return (
		<TextFieldContainerUI>
			<Controller
				name={controller.name}
				control={controller.control}
				defaultValue={controller.defaultValue}
				rules={controller.rules}
				render={({field: {value, onChange}, fieldState: {error}}) => (
					<TextField
						// sx={TextFieldStyle}
						sx={isMobile ? TextFieldMobileStyle : TextFieldStyle}
						value={value}

						{...inputProps}
						onChange={handlerChange(onChange)}
						// onChange={onChange}
						helperText={error ? error.message ? error.message : inputProps?.helperText : ''}
						// helperText={error ? error : ( inputProps?.helperText || '' )}
						// helperText={inputProps?.helperText || error ? error.message ? error.message : inputProps?.helperText : ''}
						error={!!error}
						InputProps={{
							endAdornment: iconProps?.visibleIcon ?
								(<InputAdornment onClick={handlerIconClick} position="start" disablePointerEvents={true}><EditPencil /></InputAdornment>) : ''
						}}
					/>
				)}
			/>
			{/*{typeof iconProps !== 'undefined' && (*/}
			{/*	<IconUI onClick={handlerIconClick}>*/}
			{/*		{iconActive ? <IconComponent /> : <IconComponentActive/>}*/}
			{/*	</IconUI>*/}
			{/*)}*/}
		</TextFieldContainerUI>
	);
};

const {
	TextFieldUI: TextFieldContainerUI,
	TextFieldStyle,
	TextFieldMobileStyle,
} = useTextFieldUIStyle();

export default React.memo(TextFieldUI);
