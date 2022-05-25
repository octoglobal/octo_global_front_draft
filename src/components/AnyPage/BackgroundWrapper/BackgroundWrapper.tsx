import React, {FC, ReactElement, ReactNode } from 'react';
import {useBackgroundWrapperStyle} from './style';

interface IBgProps {
	children: ReactElement | ReactNode
}


const BackgroundWrapper:FC<IBgProps> = ({children}) => {
	return(
		<BackgroundWrapperMUI>
			<BackgroundTitleMUI>
				octo global
			</BackgroundTitleMUI>
			{children}
		</BackgroundWrapperMUI>
	);
};

const {BackgroundWrapperMUI,BackgroundTitleMUI } = useBackgroundWrapperStyle();

export default React.memo(BackgroundWrapper);