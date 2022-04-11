import React from 'react';

interface IShopsDataSx {
	width?: string;
	marginLeft?: string;
	justifyContent?: string;
	flexGrow?: number,
	transform?: string,
	marginRight?: string;
}

interface IShopsSizeSx {
	width?: string;
	height?: string;
}

export interface IShopsData {
	title: string;
	url: string;
	icon: React.ElementType<React.ComponentPropsWithRef<'svg'>>
	style?: IShopsDataSx;
	initialSize?: IShopsSizeSx;
}
