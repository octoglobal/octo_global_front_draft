import React, {FC, useEffect, useRef} from 'react';
import {useHomeConfidenceListItemStyles} from '@/components/Home/HomeConfidence/HomeConfidenceListItem/style';
import gsap from 'gsap';

interface IHomeConfidenceListItemProps {
	title: string;
}

const HomeConfidenceListItem: FC<IHomeConfidenceListItemProps> = ({title}) => {

	const { ItemMUI } = useHomeConfidenceListItemStyles();

	const listItemRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const element = listItemRef.current;
			gsap.fromTo(element, {
				opacity: 0,
				transform: 'translateY(60px)'
			}, {
				opacity: 1,
				transform: 'translateY(0px)',
				scrollTrigger: {
					trigger: element,
					start: 'top 100%',
					markers: false,
				}
			});
		}
	}, []);


	return (
		<ItemMUI ref={listItemRef}>
			{title}
		</ItemMUI>
	);
};

export default React.memo(HomeConfidenceListItem);
