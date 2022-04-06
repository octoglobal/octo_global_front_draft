import React, {FC} from 'react';
import {styled} from '@mui/material';

// import {useCustomRouter} from '@/hooks/useCustomRouter';

interface ContentLayout {
	disabledPadding?: boolean,
	disabledMargin?: boolean;
	children: React.ReactChild | React.ReactNode;
}

const ContentLayoutUI = styled('div', {
	shouldForwardProp: (prop) => prop !== 'disabledPadding' && prop !== 'disabledMargin',
})<{ disabledPadding?: boolean, disabledMargin?: boolean }>(({disabledPadding, disabledMargin, theme}) => ({
	padding: !disabledPadding ? '0 80px' : '0',

	maxWidth: '1440px',
	// padding: '0 80px',
	margin: '0 auto',

	[theme.breakpoints.down(1024)]: {
		padding: !disabledPadding ? '15px' : '0',
	},

	[theme.breakpoints.down(500)]: {
		padding: '0',
		margin: disabledMargin ? '0' : '15px',
	}
}));

const ContentLayout: FC<ContentLayout> = ({disabledPadding = false, disabledMargin, children}) => {

	return (
		<ContentLayoutUI disabledPadding={disabledPadding} disabledMargin={disabledMargin}>
			{children}
		</ContentLayoutUI>
	);
};

export default React.memo(ContentLayout);
