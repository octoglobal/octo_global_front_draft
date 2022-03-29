import React, {FC} from 'react';
import {Typography } from '@mui/material';

import {useFormComponentStyle} from './style';

interface FormComponent {
	title: string,
	background?: boolean,
	children: React.ReactChild | React.ReactNode;
}

const FormComponent: FC<FormComponent> = ({title, background = true, children}) => {

	const {
		FormComponentContent,
		FormComponentTitle
	} = useFormComponentStyle();

	return (
		<FormComponentContent
			background={background}
		>
			<FormComponentTitle>
				<Typography variant="h4">{title}</Typography>
			</FormComponentTitle>
			{children}
		</FormComponentContent>
	);
};

export default React.memo(FormComponent);
