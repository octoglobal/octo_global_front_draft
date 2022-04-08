import React, {useEffect, useRef} from 'react';
import {useHomeConfidenceImgStyles} from '@/components/Home/HomeConfidence/HomeConfidenceImg/style';
import gsap from 'gsap';

const HomeConfidenceImg = () => {

	const { ImageContainerMUI, ImageMUI } = useHomeConfidenceImgStyles();
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const element = imageRef.current;
			gsap.fromTo(element, {
				opacity: 0,
				transform: 'translateY(-100px)'
			}, {
				opacity: 1,
				transform: 'translateY(0px)',
				scrollTrigger: {
					trigger: element,
					start: 'top center',
					markers: false,
				}
			});
		}
	}, []);

	return (
		<ImageContainerMUI ref={imageRef}>
			<ImageMUI src='/image/OctoConfidence.png' alt='octo-confidence-image'/>
		</ImageContainerMUI>
	);
};

export default React.memo(HomeConfidenceImg);
