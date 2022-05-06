import React, { FC, useRef, useEffect } from 'react';
import { useHomeAboutLogoStyles } from '@/components/Home/HomeAbout/HomeAboutLogo/style';
import OctoGlobal from '../../../../UI/UIIcon/OctoGlobalLogo.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
			gsap.fromTo(element, {
				
			}, {
				
				duration: 1,
				scrollTrigger: {
					trigger: element,
					start:'-30% top',
					end: '200px',
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
