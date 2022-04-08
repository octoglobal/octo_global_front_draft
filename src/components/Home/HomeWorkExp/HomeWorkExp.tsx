import React, {FC, useEffect, useRef} from 'react';
import Container from '@/components/Container/Container';
import HomeWorkExpImg from '@/components/Home/HomeWorkExp/HomeWorkExpImg/HomeWorkExpImg';
import HomeWorkExpList from '@/components/Home/HomeWorkExp/HomeWorkExpList/HomeWorkExpList';
import {useHomeWorkExpStyles} from '@/components/Home/HomeWorkExp/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

const HomeWorkExp: FC = () => {

	const {
		WrapperMUI,
		InnerContainerMUI,
	} = useHomeWorkExpStyles();

	const refWork = useRef<HTMLDivElement>(null);


	useEffect(() => {
		const element = refWork.current;
		if (typeof window !== 'undefined' && element) {
			gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: 'top 100px',
					markers: false,
					end: '1000',
					pin: false,
					scrub: 1,
					toggleActions: 'play none none none',
				}
			});
		}
	}, []);


	return (
		<Container>
			<InnerContainerMUI ref={refWork}>
				<HomeSectionTitle
					title='Как это работает'
				/>
				<WrapperMUI>
					<HomeWorkExpImg/>
					<HomeWorkExpList/>
				</WrapperMUI>
			</InnerContainerMUI>
		</Container>
	);
};

export default React.memo(HomeWorkExp);
