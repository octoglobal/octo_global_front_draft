import React, {FC, useEffect, useRef} from 'react';
import Container from '@/components/Container/Container';
import HomeAboutLogo from '@/components/Home/HomeAbout/HomeAboutLogo/HomeAboutLogo';
import HomeAboutText from '@/components/Home/HomeAbout/HomeAboutText/HomeAboutText';
import {useHomeAboutStyles} from '@/components/Home/HomeAbout/style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const HomeAbout: FC = () => {

	const { WrapperMUI } = useHomeAboutStyles();
	const logoRefElement = useRef(null);

	useEffect(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: logoRefElement.current,
				start: '0% top',
				end: '500',
				scrub: true,
				pin: true,
				toggleActions: 'play none none none'
			}
		});
	}, []);


	return (
		<Container>
			<WrapperMUI ref={logoRefElement}>
				<HomeAboutText/>
				<HomeAboutLogo/>
			</WrapperMUI>
		</Container>
	);
};

export default HomeAbout;
