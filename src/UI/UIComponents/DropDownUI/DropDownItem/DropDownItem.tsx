import React, {FC} from 'react';
import {IDropItem} from '../type';
import {useDropDownItemStyles} from './style';

const DropDownItem: FC<IDropItem & {handleToggleOpen: () => void}> = ({title, onClick, handleToggleOpen}) => {

	const handleClickItem = () => {
		onClick();
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
	ButtonMUI
} = useDropDownItemStyles();

export default React.memo(DropDownItem);
