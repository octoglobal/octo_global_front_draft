import React, { FC, useMemo, useRef } from 'react';
import Container from '@/components/Container/Container';
import HomeAboutLogo from '@/components/Home/HomeAbout/HomeAboutLogo/HomeAboutLogo';
import HomeAboutText from '@/components/Home/HomeAbout/HomeAboutText/HomeAboutText';
import {useHomeAboutStyles} from '@/components/Home/HomeAbout/style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { checkMedia } from '@/services/services';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const HomeAbout: FC = () => {

	const logoRefElement = useRef(null);

	const smallSmartphoneStyle = useMemo(() => {
		if (typeof window !== 'undefined') {
			if (window.innerHeight <= 700) {
				return  {justifyContent: 'flex-end'};
			}
			return {};
		}
		return {};
	}, []);

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		const start = checkMedia(501) ? 71 : checkMedia(1025) ? 65 : checkMedia(1181) ? 71 : 61;
	// 		const end = checkMedia(778) ? checkMedia(700, 'innerHeight') ? '0' : '100' : '500';
	// 		setTimeout(() => {
	// 			gsap.timeline({
	// 				scrollTrigger: {
	// 					trigger: logoRefElement.current,
	// 					start: `-${start}px top`,
	// 					end: end,
	// 					markers: false,
	// 					scrub: true,
	// 					pin: true,
	// 					toggleActions: 'play none none none'
	// 				}
	// 			});
	// 		}, 4);
	// 	}
	// }, []);


	return (
		<>
			<HeaderMarginMUI/>
			<Container>
				<WrapperMUI ref={logoRefElement} style={smallSmartphoneStyle}>
					<HomeAboutText/>
					<HomeAboutLogo/>
				</WrapperMUI>
			</Container>
		</>
	);
};

const { WrapperMUI, HeaderMarginMUI } = useHomeAboutStyles();


export default HomeAbout;
