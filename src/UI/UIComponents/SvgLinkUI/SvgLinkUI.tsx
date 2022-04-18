import React, {FC} from 'react';
import {useSvgLinkUIStyles} from './style';
import {LinkProps} from '@mui/material';

const SvgLinkUI: FC<LinkProps> = (props) => {
	return (
		<LinkMUI
			{...props}
			target='_blank'
			rel='noreferrer'
		>
			{props.children}
		</LinkMUI>
	);
};

const {
	LinkMUI
} = useSvgLinkUIStyles();

export default React.memo(SvgLinkUI);
