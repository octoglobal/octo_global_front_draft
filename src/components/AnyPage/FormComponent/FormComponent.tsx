import React, {FC} from 'react';

import {useFormComponentStyle} from './style';

interface FormComponent {
	title: string,
	background?: boolean,
	children: React.ReactChild | React.ReactNode;
}

const FormComponent: FC<FormComponent> = ({title, background = true, children}) => {
	return (
		<FormComponentContent
			background={background}
		>
			<FormComponentTitle>{title}</FormComponentTitle>
			{children}
		</FormComponentContent>
	);
};

export default React.memo(FormComponent);

const {
	FormComponentContent,
	FormComponentTitle
} = useFormComponentStyle();
