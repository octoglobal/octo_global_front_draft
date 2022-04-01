import React, {FC} from 'react';
import {styled} from '@mui/material';
// import {useCustomRouter} from '@/hooks/useCustomRouter';

interface ContentLayout {
	disabledPadding?: boolean,
	children: React.ReactChild | React.ReactNode;
}

const ContentLayoutUI = styled('div', {
	shouldForwardProp: (prop) => prop !== 'disabledPadding',
})<{disabledPadding?: boolean}>(({disabledPadding, theme}) => ({
	padding: !disabledPadding ? '0 80px' : '0',

	[theme.breakpoints.down(1024)]: {
		padding: !disabledPadding ? '15px' : '0',
	},

	[theme.breakpoints.down(500)]: {
		padding: !disabledPadding ? '15px' : '0',
	}
}));

const ContentLayout: FC<ContentLayout> = ({disabledPadding = false, children}) => {

	return (
		<ContentLayoutUI disabledPadding={disabledPadding}>
			{children}
		</ContentLayoutUI>
	);
};

export default React.memo(ContentLayout);
