import React, {FC} from 'react';
import { useContainerStyles } from './style';

interface IContainerProps {
	children: React.ReactChildren | React.ReactNode;
}

const Container: FC<IContainerProps> = ({children}) => {

	const { ContainerMUI } = useContainerStyles();

	return (
		<ContainerMUI>
			{children}
		</ContainerMUI>
	);
};

export default React.memo(Container);
