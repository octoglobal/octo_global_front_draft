import React from 'react';
import {SxProps} from '@mui/material';

export interface IShopsData {
	title: string;
	url: string;
	icon: React.ElementType<React.ComponentPropsWithRef<'svg'>>
	style?: SxProps;
}
