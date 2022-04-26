import React, {FC} from 'react';
import {useDropDownCollapseUIStyles} from './style';
import BlackArrowDown from '@/UIIcon/BlackArrowDown.svg';
import {useDropDownCollapseUI} from './useDropDownCollapseUI';
import DropDownCollapseItem from './DropDownCollapseItem/DropDownCollapseItem';
import {IDropDownCollapseUIProps} from './type';
import {Controller, useFormContext} from 'react-hook-form';

const DropDownCollapseUI: FC<IDropDownCollapseUIProps> = (
	{
		title,
		collapseItems,
	}
) => {

	const {
		control,
	} = useFormContext();


	const {
		isOpen,
		handleToggleOpen,
		activeArrowStyles,
		modificationTitle,
	} = useDropDownCollapseUI(title);


	return (
		<ContainerMUI>
			<TitleContainerMUI>
				<CollapseTitleMUI onClick={handleToggleOpen}>
					{modificationTitle}
				</CollapseTitleMUI>
				<CollapseIconMUI sx={activeArrowStyles}>
					<BlackArrowDown/>
				</CollapseIconMUI>
			</TitleContainerMUI>
			<Controller
				name='orderStatus'
				control={control}
				defaultValue={undefined}
				render={({field: { onChange }}) => (
					<CollapseListMUI in={isOpen}>
						{collapseItems.map(item => (
							<DropDownCollapseItem
								key={item.name}
								onClick={onChange}
								{...item}
							/>
						))}
					</CollapseListMUI>
				)}/>
		</ContainerMUI>
	);
};


const {
	ContainerMUI,
	CollapseTitleMUI,
	TitleContainerMUI,
	CollapseIconMUI,
	CollapseListMUI
} = useDropDownCollapseUIStyles();

export default React.memo(DropDownCollapseUI);
