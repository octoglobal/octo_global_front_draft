import React, {FC, useRef, useEffect} from 'react';
import {useHomeAboutLogoStyles} from '@/components/Home/HomeAbout/HomeAboutLogo/style';
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

	const logoRefElement = useRef(null);
	useEffect(() => {
		gsap.fromTo(logoRefElement.current, {
			top: '50%',
			opacity: 1,
			transform: 'translateY(0px)'
		}, {
			transform: 'translateY(-200px)',
			opacity: 0,
			top: '35%',
			duration: 1,
			scrollTrigger: {
				trigger: logoRefElement.current,
				start: '50% center',
				markers: true,
				scrub: true,
				toggleActions: 'play none none none'
			}
		});
	}, []);

	return (
		<ContainerMUI ref={logoRefElement}>
			<LogoMUI>
				<OctoGlobal/>
			</LogoMUI>
			<TextMUI>
				octo global
			</TextMUI>
		</ContainerMUI>
	);
};

export default HomeAboutLogo;
