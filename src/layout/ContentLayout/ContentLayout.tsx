import React, {FC} from 'react';
import {styled} from '@mui/material';

interface ContentLayout {
	children: React.ReactChild | React.ReactNode;
}

const ContentLayoutUI = styled('div')(({theme}) => ({
	padding: '0 80px',


	[theme.breakpoints.down(1024)]: {
		padding: '15px',
	},

	[theme.breakpoints.down(500)]: {
		padding: '15px',
	}
}));

const ContentLayout: FC<ContentLayout> = ({children}) => {
	return (
		<ContentLayoutUI>
			{children}
		</ContentLayoutUI>
	);
};

export default React.memo(ContentLayout);
