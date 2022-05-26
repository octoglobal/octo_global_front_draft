import React, {KeyboardEvent, SyntheticEvent, useRef, useState, useMemo,useEffect} from 'react';
import {fetchUserLogout} from '@/reducers/userSlice/asyncActions/userApi';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useAppDispatch} from '@/hooks/useReduxHooks';

export const useHeader = () => {

	const dispatch = useAppDispatch();
	const {router, pushTo} = useCustomRouter();

	// Пункты пользователя
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	const handlerPushLogin = () => {
		pushTo('/login');
	};

	const handlerLogout = () => {
		dispatch(fetchUserLogout())
			.then(() => {
				pushTo('/');
				setOpen(false);
			});
	};

	const handlerPushAccount = (url: string, query = {}) => {		
		return () => {			
			pushTo(url, query);
			setOpen(false);
		};
	};

	const handleListKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	};

	// Пункты навигации

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const openBurger = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseBurger = () => {
		setAnchorEl(null);
	};

	const handlerPushToNav = (url: string): () => void => {
		return () => {
			pushTo(url);
			handleCloseBurger();
		};
	};

	const isHomePage = useMemo(
		() => router.pathname === '/',
		[router.pathname]
	);



	useEffect(()=>{
		console.log(router,'ff');
	},[router]);

	return {
		handlerPushToNav,
		handleClick,
		openBurger,
		handleListKeyDown,
		handlerPushAccount,
		handlerLogout,
		handleToggle,
		handleClose,
		handlerPushLogin,
		handleCloseBurger,
		anchorEl,
		anchorRef,
		open,
		isHomePage
	};
};
