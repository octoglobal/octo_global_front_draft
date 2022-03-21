import React, {FC} from 'react';
import {TextField, TextFieldProps} from '@mui/material';
import {Controller, ControllerProps} from 'react-hook-form';

interface ITextFieldUIProps {
	controller: Omit<ControllerProps, 'render'>
	inputProps?: TextFieldProps
}

const TextFieldUI: FC<ITextFieldUIProps> = ({controller, inputProps}) => {
	return (
		<Controller
			name={controller.name}
			control={controller.control}
			defaultValue={controller.defaultValue}
			rules={controller.rules}
			render={({field: {value, onChange}, fieldState: {error}}) => (
				<TextField
					{...inputProps}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					helperText={error ? error.message ? error.message : inputProps?.helperText : ''}
					error={!!error}
				/>
			)}
		/>
	);
};

export default TextFieldUI;
