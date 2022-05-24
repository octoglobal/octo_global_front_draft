import React, {FC} from 'react';
import {
	Controller,
	ControllerProps
} from 'react-hook-form';
import {CheckboxProps} from '@mui/material';
import CheckBoxEmpty from '../../UIIcon/CheckboxEmptyV2.svg';
import CheckBoxFill from '../../UIIcon/CheckBoxFillV2.svg';
import {useCheckboxUIV3Styles} from './style';

interface ICheckboxUIV3Props {
	controller: Omit<ControllerProps, 'render'>
	myValue: boolean,
	checkboxProps?: CheckboxProps,
	
}

const CheckboxUIV3: FC<ICheckboxUIV3Props> = ({controller, checkboxProps, myValue}) => {


	return (
		<Controller
			{...controller}
			defaultValue={false}
			render={({field: {value, onChange}}) => (
				<StyleCheckboxMUI
					icon={<CheckBoxEmpty />}
					checkedIcon={<CheckBoxFill />}
					checked={myValue}
					{...checkboxProps}
					// onChange={handleChange(value, onChange)}
				/>
			)}
		/>
	);
};

const {
	StyleCheckboxMUI
} = useCheckboxUIV3Styles();

export default React.memo(CheckboxUIV3);
