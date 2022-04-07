import React, {FC} from 'react';
import Link from 'next/link';

import {useLinkStyle} from './style';

interface ICustomLinkUI {
	href?: string,
	onClick?: () => void,
	children: React.ReactChildren | React.ReactNode;
}

const CustomLinkUI : FC<ICustomLinkUI> = ({
	href = '',
	onClick,
	children,
}) => {

	const handlerClick = () => {
		console.log('handlerClick');
		if(onClick) onClick();
	}

	const {LinkUI} = useLinkStyle();

	return (
		<Link
			href={href}
		>
			<LinkUI
				onClick={handlerClick}
			>
				{children}
			</LinkUI>
		</Link>
	);
};

export default React.memo(CustomLinkUI);
