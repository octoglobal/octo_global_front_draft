import React, {FC, useEffect, useRef} from 'react';
import {useHomeWorkExpListItemStyles} from '@/components/Home/HomeWorkExp/HomeWorkExpListItem/style';
import gsap from 'gsap';

export interface IHomeWorkExpListItemProps {
	title: string;
	icon: React.ElementType<React.ComponentPropsWithRef<'svg'>>
	animation: boolean,
	top: number;
}

const HomeWorkExpListItem: FC<IHomeWorkExpListItemProps> = ({ title, icon, animation}) => {
	const {
		ItemMUI,
		ItemIconMUI,
		ItemTextMUI
	} = useHomeWorkExpListItemStyles();

	const Icon = icon;
	const listItemRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (typeof window !== 'undefined' && animation) {
			const element = listItemRef.current;
			gsap.fromTo(element, {
				opacity: 0,
				transform: 'translateY(50px)'
			}, {
				opacity: 1,
				transform: 'translateY(0px)',
				scrollTrigger: {
					trigger: element,
					// start: `top -${top}px`,
					start: 'top 70%',
					markers: false,
					once: true,
					end: '50',
				}
			});
		}
	}, []);

	return (
		<ItemMUI ref={listItemRef}>
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
