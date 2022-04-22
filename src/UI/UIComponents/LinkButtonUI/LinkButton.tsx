import React, {FC} from 'react';
import {styled} from '@mui/material';

interface ILinkButtonUIProps {
	href: string;
	children: React.ReactChildren | React.ReactNode;
}

const LinkButtonUI: FC<ILinkButtonUIProps> = ({href, children}) => {
	return (
		<LinkWrapperMUI href={href}>
			{children}
		</LinkWrapperMUI>
	);
};


const LinkWrapperMUI = styled('a')(({theme}) => ({
	borderRadius: '4px',
	backgroundColor: '#274D82',
	padding: '12px 0',
	maxWidth: '147px',
	color: '#FFFFFF',
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '16px',
	margin: '0 auto',
	textAlign: 'center',
	display: 'block',
	width: '100%',
	'&:hover': {
		backgroundColor: '#203f69'
	},
	[theme.breakpoints.down(1025)]: {
		padding: '9px 0',
		fontSize: '16px',
		lineHeight: '19px',
		maxWidth: '159px',
	}
}));

export default React.memo(LinkButtonUI);
