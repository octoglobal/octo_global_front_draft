import React, {FC, useEffect, useRef} from 'react';
import {useHomeWorkExpImgStyles} from '@/components/Home/HomeWorkExp/HomeWorkExpImg/style';
import gsap from 'gsap';

const HomeWorkExpImg: FC = () => {

	const {
		ImageMUI,
		ContainerMUI,
		ImageContainerMUI
	} = useHomeWorkExpImgStyles();

	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const element = imageRef.current;
			gsap.fromTo(element, {
				opacity: 0,
				transform: 'translateY(100px)'
			}, {
				opacity: 1,
				transform: 'translateY(0px)',
				scrollTrigger: {
					trigger: element,
					start: 'top 75%',
					markers: false,
				}
			});
		}
	}, []);


	return (
		<ContainerMUI>
			<ImageContainerMUI ref={imageRef}>
				<ImageMUI src='/image/homeWorkExpMap.png' alt='delivery-map'/>
			</ImageContainerMUI>
		</ContainerMUI>
	);
};

export default React.memo(HomeWorkExpImg);
