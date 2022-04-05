import React, {FC} from 'react';
import {useHomeConfidenceListItemStyles} from '@/components/Home/HomeConfidence/HomeConfidenceListItem/style';

interface IHomeConfidenceListItemProps {
	title: string;
}

const HomeConfidenceListItem: FC<IHomeConfidenceListItemProps> = ({title}) => {

	const { ItemMUI } = useHomeConfidenceListItemStyles();

	return (
		<ItemMUI>
			{title}
		</ItemMUI>
	);
};

export default React.memo(HomeConfidenceListItem);
