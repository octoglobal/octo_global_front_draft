import React, {FC} from 'react';
import {useHomeWorkExpListItemStyles} from '@/components/Home/HomeWorkExp/HomeWorkExpListItem/style';

interface IHomeWorkExpListItemProps {
	title: string;
	icon: React.ElementType<React.ComponentPropsWithRef<'svg'>>
}

const HomeWorkExpListItem: FC<IHomeWorkExpListItemProps> = ({ title, icon}) => {
	const {
		ItemMUI,
		ItemIconMUI,
		ItemTextMUI
	} = useHomeWorkExpListItemStyles();

	const Icon = icon;

	return (
		<ItemMUI>
			<ItemIconMUI>
				<Icon/>
			</ItemIconMUI>
			<ItemTextMUI>
				{title}
			</ItemTextMUI>
		</ItemMUI>
	);
};

export default React.memo(HomeWorkExpListItem);
