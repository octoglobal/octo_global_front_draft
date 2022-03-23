import React, {FC} from "react";
import Link from 'next/link'

import {useLinkStyle} from './style';

interface ICustomLinkUI {
	href: string,
	customRoot: string,
	children: React.ReactChildren
}

const CustomLinkUI : FC<ICustomLinkUI> = (
	{
		href = '#',
		linkProps = null,
		children,
	}
) => {

	const {LinkUI} = useLinkStyle()

	return (
		<Link
			href={href}
		>
			<LinkUI
				{...linkProps}
			>
				{children}
			</LinkUI>
		</Link>
	)
}

export default React.memo(CustomLinkUI);
