import React, {FC} from 'react';
import {
	Controller,
	ControllerProps
} from 'react-hook-form';
import {CheckboxProps} from '@mui/material';
import CheckBoxEmpty from '../../UIIcon/CheckboxEmptyV2.svg';
import CheckBoxFill from '../../UIIcon/CheckBoxFillV2.svg';
import {useCheckboxUIV2Styles} from './style';

interface ICheckboxUIV2Props {
	controller: Omit<ControllerProps, 'render'>
	checkboxProps?: CheckboxProps,
	callback?: () => void;
}

const CheckboxUIV2: FC<ICheckboxUIV2Props> = ({controller, checkboxProps, callback}) => {

	const handleChange = (value: boolean, onChange: (state: boolean) => void) => {
		
		return () => {
			onChange(!value);
			if (callback) {
				callback();
				
			}
		};
	};
	return (
		<Controller
			{...controller}
			defaultValue={false}
			render={({field: {value, onChange}}) => (
				<StyleCheckboxMUI
					icon={<CheckBoxEmpty />}
					checkedIcon={<CheckBoxFill />}
					checked={value}
					{...checkboxProps}
					onChange={handleChange(value, onChange)}
				/>
			)}
		/>
	);
};

const {
	StyleCheckboxMUI
} = useCheckboxUIV2Styles();

export default React.memo(CheckboxUIV2);
