import React, {FC} from 'react';
import {Checkbox, CheckboxProps} from '@mui/material';
import {Controller, ControllerProps} from 'react-hook-form';

import CheckBoxEmpty from '../../UIIcon/CheckBoxEmpty.svg';
import CheckBoxFill from '../../UIIcon/CheckBoxFill.svg';

import {useCheckBoxUIStyle} from './style';

interface ICheckBoxUIProps {
	controller: Omit<ControllerProps, 'render'>
	inputProps?: CheckboxProps
}

const CheckBoxUI: FC<ICheckBoxUIProps> = ({controller, inputProps}) => {

	const {CheckBoxStyle} = useCheckBoxUIStyle();

	return (
		<Controller
			name={controller.name}
			control={controller.control}
			defaultValue={controller.defaultValue}
			rules={controller.rules}
			render={({field: {value, onChange}}) => (
				<Checkbox
					sx={CheckBoxStyle}
					{...inputProps}
					checked={value}
					icon={<CheckBoxEmpty />}
					checkedIcon={<CheckBoxFill />}
					onChange={() => onChange(!value)}
				/>
			)}
		/>
	);
};

export default React.memo(CheckBoxUI);
