import React, {FC, useEffect, useRef} from 'react';
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

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const element = logoRef.current;
			const end = checkMedia(778) ? checkMedia(700, 'innerHeight') ? '70' : '300' : '500';
			const transform = checkMedia(501) ? '50' : '100';
			if (element) {
				if (window.location.pathname === '/') {
					gsap.fromTo(element, {
						opacity: 0,
						transform: `translateY(-${transform}px)`,
						visibility: 'visible',
					}, {
						opacity: 1,
						transform: 'translateY(0px)',
						duration: 1,
						scrollTrigger: {
							start: 'top top',
							markers: false,
							end: end,
							scrub: true,
						}
					});
				} else {
					gsap.to(element, {
						visibility: 'visible',
					});
				}
			}
		}
	}, [router.pathname]);

	return (
		<OctoIconsUI
			onClick={handlerPushHome}
			ref={logoRef}
		>
			<OctoGlobal />
			<OctoGlobalTextIcon />
		</OctoIconsUI>
	);
};

export default React.memo(Logotip);
