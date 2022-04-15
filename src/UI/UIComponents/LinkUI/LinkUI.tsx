import React, {FC} from 'react';
import Link from 'next/link';

import {useLinkStyle} from './style';

export type CustomLinkTypes = 'button';

interface ICustomLinkUI {
	href?: string,
	onClick?: () => void,
	children: React.ReactChildren | React.ReactNode;
	type?: CustomLinkTypes,
}

const CustomLinkUI : FC<ICustomLinkUI> = ({
	href = '',
	onClick,
	children,
	type = '',
}) => {

	const handlerClick = () => {
		if(onClick) onClick();
	};

	const {LinkUI} = useLinkStyle();

	return (
		<Link
			href={href}
		>
			<LinkUI
				type={type}
				onClick={handlerClick}
			>
				{children}
			</LinkUI>
		</Link>
	);
};

export default React.memo(CustomLinkUI);
