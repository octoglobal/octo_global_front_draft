import React, {FC} from 'react';
import {
	Controller,
	ControllerProps
} from 'react-hook-form';
import {CheckboxProps} from '@mui/material';
import CheckBoxEmpty from '@/UIIcon/CheckBoxEmptyV2.svg';
import CheckBoxFill from '@/UIIcon/CheckBoxFillV2.svg';
import {useCheckboxUIV2Styles} from './style';

interface ICheckboxUIV2Props {
	controller: Omit<ControllerProps, 'render'>
	checkboxProps?: CheckboxProps
}

const CheckboxUIV2: FC<ICheckboxUIV2Props> = ({controller, checkboxProps}) => {
	return (
		<Controller
			{...controller}
			defaultValue={false}
			render={({field: {value, onChange}}) => (
				<StyleCheckboxMUI
					icon={<CheckBoxEmpty />}
					checkedIcon={<CheckBoxFill />}
					{...checkboxProps}
					value={value}
					onChange={() => onChange(!value)}
				/>
			)}
		/>
	);
};

const {
	StyleCheckboxMUI
} = useCheckboxUIV2Styles();

export default React.memo(CheckboxUIV2);
