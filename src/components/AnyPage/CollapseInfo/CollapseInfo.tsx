import React, { FC, useMemo, useState } from 'react';
import { useCollapseInfoStyles } from '@/components/AnyPage/CollapseInfo/style';

interface ICollapseInfoProps {
	title: string;	
	end?: boolean,
	children?: React.ReactNode | React.ReactElement | React.ReactChild,
}

const CollapseInfo: FC<ICollapseInfoProps> = (
	{
		title,		
		end,
		children
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
		if (end ) {			
			return {
				borderBottom: 0,
			};
		}
		return  {};
	}, [end]);


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
				{children}				
			</CollapseMUI>
		</ContainerMUI>
	);
};

const {
	CollapseMUI,
	ContainerMUI,
	CollapseTitleMUI,
	ContainerButtonMUI,
} = useCollapseInfoStyles();

export default React.memo(CollapseInfo);
