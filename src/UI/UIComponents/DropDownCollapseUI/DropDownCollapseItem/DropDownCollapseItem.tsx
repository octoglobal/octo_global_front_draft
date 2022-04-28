import React, {FC} from 'react';
import {ICollapseItem} from '../type';
import {Button, styled} from '@mui/material';

interface IDropDownCollapseItemProps extends ICollapseItem {
	onClick: (state: {title: string; value: number}) => void;
}

const DropDownCollapseItem: FC<IDropDownCollapseItemProps> = (
	{
		title,
		value,
		onClick,
	}
) => {

	return (
		<ItemButton onClick={() => onClick({title, value})}>
			{title}
		</ItemButton>
	);
};


const ItemButton = styled(Button)(() => ({
	fontSize: '20px',
	lineHeight: '23px',
	color: '#000000',
	fontWeight: 300,
	display: 'block',
	textTransform: 'none',
	padding: '0',
	marginBottom: '10px',
}));


export default React.memo(DropDownCollapseItem);
