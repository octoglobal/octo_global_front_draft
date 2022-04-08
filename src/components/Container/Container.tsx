import React, {FC, useMemo} from 'react';
import { useContainerStyles } from './style';
import {SxProps} from '@mui/material';

interface IContainerProps {
	children: React.ReactChildren | React.ReactNode;
	customStyles?: SxProps
}

const Container: FC<IContainerProps> = ({children, customStyles = {}}) => {

	const { ContainerMUI } = useContainerStyles();

	return (
		<ContainerMUI sx={customStyles}>
			{children}
		</ContainerMUI>
	);
};

export default React.memo(Container);
