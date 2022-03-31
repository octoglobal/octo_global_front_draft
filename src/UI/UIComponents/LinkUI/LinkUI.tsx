import React, {FC} from 'react';
import Link from 'next/link';

import {useLinkStyle} from './style';

interface ICustomLinkUI {
	href?: string,
	children: React.ReactChildren | React.ReactNode;
}

const CustomLinkUI : FC<ICustomLinkUI> = ({
	href = '',
	children,
}) => {

	const {LinkUI} = useLinkStyle();

	return (
		<Link
			href={href}
		>
			<LinkUI>
				{children}
			</LinkUI>
		</Link>
	);
};

export default React.memo(CustomLinkUI);
