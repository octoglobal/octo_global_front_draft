import React, {FC} from 'react';
import {IDropItem} from '../type';
import {useDropDownItemStyles} from './style';


interface IDropDownItemProps extends IDropItem{
	handleToggleOpen: () => void,
	itemId: number | undefined
}

const DropDownItem: FC<IDropDownItemProps> = ({title, onClick, handleToggleOpen, itemId}) => {
	const handleClickItem = () => {
		onClick(itemId);
		setTimeout(() => {
			handleToggleOpen();
		}, 300);
	};


	return (
		<ButtonMUI onClick={handleClickItem}>
			{title}
		</ButtonMUI>
	);
};

const {
	ButtonMUI,
} = useDropDownItemStyles();

export default React.memo(DropDownItem);
