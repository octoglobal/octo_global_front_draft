import React, {FC} from 'react';
import DorpDownIcon from '@/UIIcon/DropDownIcon.svg';
import {useDropDownStyles} from './style';
import {useDropDownUI} from './useDropDownUI';
import DropDownItem from './DropDownItem/DropDownItem';
import {IDropItem} from './type';

interface IDropDownUIProps {
	dropItems: IDropItem[]
}

const DropDownUI: FC<IDropDownUIProps> = ({dropItems}) => {

	const {
		isOpen,
		handleToggleOpen
	} = useDropDownUI();

	return (
		<ContainerMUI>
			<IconButtonMUI
				color='secondary'
				onClick={handleToggleOpen}
				disableTouchRipple={true}
			>
				<DorpDownIcon/>
			</IconButtonMUI>
			{isOpen && (
				<ButtonContainerMUI>
					{dropItems.map((item, index) => (
						<DropDownItem
							key={`${index}${item.title}`}
							title={item.title}
							onClick={item.onClick}
							handleToggleOpen={handleToggleOpen}
						/>
					))}
				</ButtonContainerMUI>
			)}
			<OverlayModalMUI
				open={isOpen}
				disableScrollLock={true}
				onClick={handleToggleOpen}
				onClose={handleToggleOpen}
			/>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	IconButtonMUI,
	OverlayModalMUI,
	ButtonContainerMUI,
} = useDropDownStyles();


export default React.memo(DropDownUI);
