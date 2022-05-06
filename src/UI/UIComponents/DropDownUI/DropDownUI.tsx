import React, {FC} from 'react';
import DropDownIcon from '@/UIIcon/DropDownIcon.svg';
import DropDownAdaptiveIcon from '../../UIIcon/SmallMenuIcon.svg';
import {useDropDownStyles} from './style';
import {useDropDownUI} from './useDropDownUI';
import DropDownItem from './DropDownItem/DropDownItem';
import {IDropItem} from './type';
import {SxProps} from '@mui/material';

interface IDropDownUIProps {
	dropItems: IDropItem[],
	itemId?: number,
	CustomIcon?: FC,
	containerStyles?: SxProps
}

const DropDownUI: FC<IDropDownUIProps> = (
	{
		dropItems,
		itemId,
		containerStyles = {}
	}
) => {

	const {
		isOpen,
		isMobile,
		handleToggleOpen
	} = useDropDownUI();

	return (
		<ContainerMUI>
			<IconButtonMUI
				color='secondary'
				onClick={handleToggleOpen}
				disableTouchRipple={true}
			>
				{isMobile ? (
					<DropDownAdaptiveIcon/>
				) : (
					<DropDownIcon/>
				)}
			</IconButtonMUI>
			{isOpen && (
				<ButtonContainerMUI sx={containerStyles}>
					{dropItems.map((item, index) => (
						<DropDownItem
							key={`${index}${item.title}`}
							title={item.title}
							onClick={item.onClick}
							itemId={itemId}
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
