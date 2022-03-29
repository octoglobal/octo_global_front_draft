import React, {FC} from 'react';

import {useAuthFormLayoutStyle} from './style';

interface AuthFormLayout {
	children: React.ReactChild | React.ReactNode;
}

const AuthFormLayout: FC<AuthFormLayout> = ({children}) => {

	const {
		AuthFormLayoutBoxUI
	} = useAuthFormLayoutStyle();

	return (
		<AuthFormLayoutBoxUI>
			{children}
		</AuthFormLayoutBoxUI>
	);
};

export default React.memo(AuthFormLayout);
