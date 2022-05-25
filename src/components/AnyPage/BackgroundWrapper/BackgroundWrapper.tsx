import React from 'react';
import {useBackgroundWrapperStyle} from './style';

const BackgroundWrapper = ({children}) => {
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