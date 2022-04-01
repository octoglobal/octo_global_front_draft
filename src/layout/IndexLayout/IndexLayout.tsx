import React, {FC} from 'react';

import {useIndexLayoutStyle} from './style';

interface IIndexLayout {
	children: React.ReactChild | React.ReactNode;
}

export const IndexLayout : FC<IIndexLayout> = ({children}) => {

	const {
		IndexLayoutUI
	} = useIndexLayoutStyle();

	return (
		<IndexLayoutUI>
			{children}
		</IndexLayoutUI>
	);
};

export const IndexShortLayout : FC<IIndexLayout> = ({children}) => {

	const {
		IndexShortLayoutUI
	} = useIndexLayoutStyle();

	return (
		<IndexShortLayoutUI>
			{children}
		</IndexShortLayoutUI>
	);
};
