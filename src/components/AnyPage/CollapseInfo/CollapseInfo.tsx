import React, { FC, useMemo, useState } from 'react';
import { useCollapseInfoStyles } from '@/components/AnyPage/CollapseInfo/style';

interface ICollapseInfoProps {
	title: string;
	description?: string;
	allLength?: number;
	index?: number
}

const CollapseInfo: FC<ICollapseInfoProps> = (
	{
		title,
		description,
		index,
		allLength
	}
) => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleToggleOpen = () => {
		setIsOpen(prevState =>  !prevState);
	};

	const activeTitleStyles = useMemo(() => {
		if (isOpen) {
			return {color: '#000000'};
		}
		return  {};
	}, [isOpen]);

	const lastItemStyles = useMemo(() => {
		if (index === allLength) {
			return {
				borderBottom: 0,
			};
		}
		return  {};
	}, [index, allLength]);


	return (
		<ContainerMUI
			sx={lastItemStyles}
			onClick={handleToggleOpen}
		>
			<ContainerButtonMUI>
				<CollapseTitleMUI sx={activeTitleStyles}>
					{title}
				</CollapseTitleMUI>
			</ContainerButtonMUI>
			<CollapseMUI in={isOpen} onClick={handleToggleOpen}>
				{description && (
					<CollapseDescMUI>
						{description}
					</CollapseDescMUI>
				)}
			</CollapseMUI>
		</ContainerMUI>
	);
};

const {
	CollapseMUI,
	ContainerMUI,
	CollapseDescMUI,
	CollapseTitleMUI,
	ContainerButtonMUI,
} = useCollapseInfoStyles();

export default React.memo(CollapseInfo);
