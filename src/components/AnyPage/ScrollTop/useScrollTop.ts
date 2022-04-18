import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useEffect, useMemo, useState} from 'react';
import {useMediaQuery} from '@mui/material';

export type isTopStateDirection = undefined | 'top' | 'bottom'

export interface IisTopState {
	direction: isTopStateDirection,
	isTop: boolean,
	render: number;
}

export const useScrollTop = () => {
	const scrollRoutes: string[] = ['/shops'];
	const {getPathName, router} = useCustomRouter();
	const isMobile = useMediaQuery('(max-width: 1024px)');
	const [isTop, setIsTop] = useState<IisTopState>({
		direction: undefined,
		isTop: false,
		render: 1,
	});

	const isMountingScroll = useMemo(() => {
		return !!(scrollRoutes.find(route => route === getPathName())) && !isMobile;
	}, [router, isMobile]);

	const isVisible = useMemo(() => (
		isTop && isMountingScroll
	), [isTop, isMountingScroll]);

	const handleClickButton = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				behavior: 'smooth',
				top: 0,
			});
		}
	};

	const onScroll: EventListener = (event: Event) => {
		if (typeof window !== 'undefined') {
			const window = event.currentTarget as Window;
			if (window.pageYOffset > 500) {
				setIsTop(prevState => {
					return {
						isTop: true,
						direction: 'bottom',
						render:prevState.direction == 'top' ? prevState.render + 1 : prevState.render,
					};
				});
				return;
			}
			setIsTop(prevState => {
				return {
					isTop: false,
					direction: 'top',
					render: prevState.direction == 'bottom' ? prevState.render + 1 : prevState.render,
				};
			});
		}
	};

	useEffect(() => {
		if (isMountingScroll) {
			window.addEventListener('scroll', onScroll);
		}
		return () => {
			try {
				window.removeEventListener('scroll', onScroll);
			} catch (e) {
				throw new Error('ScrollArrow Error');
			}
		};
	}, [isMountingScroll]);


	return {
		isTop,
		isVisible,
		isMountingScroll,
		handleClickButton,
	};
};
