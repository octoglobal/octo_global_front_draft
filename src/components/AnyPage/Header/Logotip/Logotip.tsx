import React, {FC, useEffect, useRef} from 'react';
import {styled} from '@mui/material';

import {useCustomRouter} from '../../../../hooks/useCustomRouter';

import OctoGlobal from '../../../../UI/UIIcon/OctoGlobal.svg';
import OctoGlobalTextIcon from '../../../../UI/UIIcon/OctoGlobalTextIcon.svg';
import gsap from 'gsap';
import {checkMedia} from '@/services/services';

const OctoIconsUI = styled('span')(() => ({
	width: 'auto',

	display: 'flex',
	flexDirection: 'row',
	alignItems: 'baseline',

	'& svg': {
		cursor: 'pointer',
	},

	'& svg:first-child': {
		marginRight: '6px',
	}
}));

const Logotip: FC = () => {

	const {pushTo} = useCustomRouter();
	const logoRef = useRef<HTMLDivElement>(null);

	const handlerPushHome = () => {
		pushTo('/');
	};

	useEffect(() => {
		const element = logoRef.current;
		const end = checkMedia(778) ? checkMedia(700, 'innerHeight') ? '70' : '300' : '500';
		if (typeof window !== 'undefined' && element) {
			gsap.fromTo(element, {
				opacity: 0,
				transform: 'translateY(-100px)'
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
		}
	}, []);

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
