import React, { FC, useRef, useEffect } from 'react';
import { useHomeAboutLogoStyles } from '@/components/Home/HomeAbout/HomeAboutLogo/style';
import OctoGlobal from '../../../../UI/UIIcon/OctoGlobalLogo.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { checkMedia } from '@/services/services';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const HomeAboutLogo: FC = () => {
	const {
		LogoMUI,
		TextMUI,
		ContainerMUI,
	} = useHomeAboutLogoStyles();

	const logoRefElement = useRef<HTMLDivElement>(null);


	useEffect(() => {
		const element = logoRefElement.current;
		if (typeof window !== 'undefined' && element) {
			const offsetTop = element.offsetTop;
			const start = checkMedia(778) ? `-${offsetTop + 70}px top` : 'center 55%';
			gsap.fromTo(element, {
				top: '50%',
				opacity: 1,
				transform: 'translateY(0px)',
			}, {
				transform: 'translateY(-200px)',
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start: start,
					markers: false,
					scrub: true,
					toggleActions: 'play none none none',
				},
			});
		}
	}, []);

	return (
		<ContainerMUI ref={logoRefElement}>
			<LogoMUI>
				<OctoGlobal />
			</LogoMUI>
			<TextMUI>
                octo global
			</TextMUI>
		</ContainerMUI>
	);
};

export default HomeAboutLogo;
