import React, { FC, useEffect, useMemo, useRef } from 'react';
import {styled} from '@mui/material';

import {useCustomRouter} from '@/hooks/useCustomRouter';

import OctoGlobal from '../../../../UI/UIIcon/OctoGlobal.svg';
import OctoGlobalTextIcon from '../../../../UI/UIIcon/OctoGlobalTextIcon.svg';
import gsap from 'gsap';
import {checkMedia} from '@/services/services';

const OctoIconsUI = styled('span')(() => ({
	width: 'auto',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'baseline',
	visibility: 'hidden',

	'& svg': {
		cursor: 'pointer',
	},

	'& svg:first-child': {
		marginRight: '6px',
	}
}));

const Logotip: FC = () => {

	const {router, pushTo} = useCustomRouter();
	const logoRef = useRef<HTMLDivElement>(null);

	const handlerPushHome = () => {
		pushTo('/');
	};

	const isLanding = useMemo(() => {
		if (router) {
			return router.pathname === '/';
		}
	}, [router]);


	useEffect(() => {
		if (typeof window !== 'undefined') {
			const element = logoRef.current; //				мобилка и высона меньше 700	 >700									десктоп		большой планш		
			const start = checkMedia(778) ? checkMedia(700, 'innerHeight') ? '1% top' : '4% top' : checkMedia(1000, 'innerHeight')? '7% top' :'11% top';
			const end = checkMedia(778) ? checkMedia(700, 'innerHeight') ? '6% top' : '10% top' : checkMedia(1000, 'innerHeight')? '12% top' :'16% top';
			const transform = checkMedia(501) ? '25' : '100';
		
			
			if (element) {
				gsap.fromTo(element, {
					opacity: 0,
					transform: `translateY(-${transform}px)`,
					visibility: 'visible',
				}, {
					opacity: 1,
					transform: 'translateY(0px)',
					duration: 1,
					scrollTrigger: {
						start: start,
						markers: false,
						end: end,
						scrub: true,
					}
				});
			}
		}
	}, [router.pathname]);

	return (
		isLanding ? (
			<OctoIconsUI
				onClick={handlerPushHome}
				ref={logoRef}
			>
				<OctoGlobal />
				<OctoGlobalTextIcon />
			</OctoIconsUI>
		) : (
			<OctoIconsUI
				onClick={handlerPushHome}
				sx={{
					visibility: 'visible'
				}}
			>
				<OctoGlobal />
				<OctoGlobalTextIcon />
			</OctoIconsUI>
		)
	);
};

export default React.memo(Logotip);
