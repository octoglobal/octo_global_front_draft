import React, { FC, useEffect, useMemo, useRef } from 'react';
import Container from '@/components/Container/Container';
import HomeAboutLogo from '@/components/Home/HomeAbout/HomeAboutLogo/HomeAboutLogo';
import HomeAboutText from '@/components/Home/HomeAbout/HomeAboutText/HomeAboutText';
import {useHomeAboutStyles} from '@/components/Home/HomeAbout/style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { checkMedia } from '@/services/services';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const HomeAbout: FC = () => {

	const { WrapperMUI } = useHomeAboutStyles();
	const logoRefElement = useRef(null);

	const smallSmartphoneStyle = useMemo(() => {
		if (typeof window !== 'undefined') {
			if (window.innerHeight <= 700) {
				return  {justifyContent: 'flex-start', marginTop: '5px'};
			}
			return {};
		}
		return {};
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const end = checkMedia(778) ? checkMedia(700, 'innerHeight') ? '0' : '100' : '500';
			gsap.timeline({
				scrollTrigger: {
					trigger: logoRefElement.current,
					start: '0% top',
					end: end,
					scrub: true,
					pin: true,
					toggleActions: 'play none none none'
				}
			});
		}
	}, []);


	return (
		<Container>
			<WrapperMUI ref={logoRefElement} style={smallSmartphoneStyle}>
				<HomeAboutText/>
				<HomeAboutLogo/>
			</WrapperMUI>
		</Container>
	);
};

export default HomeAbout;
