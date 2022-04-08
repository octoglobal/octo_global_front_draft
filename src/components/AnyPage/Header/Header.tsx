import React, {SyntheticEvent, KeyboardEvent, useRef, useState, /** EventHandler */} from 'react';
import {Box, Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from '@mui/material';

import {IHeaderNavItemsData} from '../../../types/types';
import Menu from '@mui/material/Menu';
import HeaderMenu from '../../../UI/UIIcon/HeaderMenu.svg';
import MobileHeader from './MobileHeader/MobileHeader';
import User from '../User/User';
import Logotip from '../../AnyPage/Header/Logotip/Logotip';
import {useMobile} from '@/hooks/useMedia';
import {useUserStore} from '@/hooks/useUserStore';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useHeaderStyle} from './style';
import HeaderNavLink from './HeaderNavLink/HeaderNavLink';
import {fetchUserLogout} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import HeaderNavLinksArray from './HeaderNavLink/HeaderNavLinkData.json';
import {useCustomSize} from '../../../hooks/useMedia';

const Header = () => {

	const dispatch = useAppDispatch();
	const {isCustomSize} = useCustomSize(1240);

	const {
		HeaderMarginMUI,
		HeaderBurgerButtonMUI,
		HeaderWrapperUI,
		HeaderContentMUI,
		HeaderNavUI,
		UserWrapperUI,
		ButtonLoginUI,
		ArrowUI,
		LogoMUI
	} = useHeaderStyle();

	const navArray: IHeaderNavItemsData = HeaderNavLinksArray;

	const {
		// user: {
		// 	id,
		// 	// name, surname
		// },
		isAuth,
		// loading
	} = useUserStore();

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

	const {isMobile} = useMobile();

	const {pushTo} = useCustomRouter();

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

	return (
		<>
			<HeaderMarginMUI/>
			{!isMobile ? (
				<HeaderWrapperUI>
					<HeaderContentMUI>

						{isCustomSize && (
							<HeaderBurgerButtonMUI>
								<Button
									onClick={handleClick}
								>
									<HeaderMenu/>
								</Button>
								<Menu
									id='long-menu'
									MenuListProps={{
										'aria-labelledby': 'long-button',
									}}
									anchorEl={anchorEl}
									open={openBurger}
									onClose={handleCloseBurger}
									PaperProps={{
										style: {
											maxHeight: 48 * 4.5,
											width: '20ch',
										},
									}}
								>
									{navArray.desktop.map((option) => (
										<MenuItem
											key={option.title}
											selected={option.title === 'Pyxis'}
											onClick={handleCloseBurger}
										>
											{option.title}
										</MenuItem>
									))}
								</Menu>
							</HeaderBurgerButtonMUI>
						)}

						<LogoMUI>
							<Logotip/>
						</LogoMUI>

						<HeaderNavUI>
							{!isCustomSize && <HeaderNavLink/>}
							<>
								{!isAuth ? (
									<ButtonUI
										style={ButtonLoginUI}
										onClick={handlerPushLogin}
									>
										Войти
									</ButtonUI>
								) : (
									<UserWrapperUI
										ref={anchorRef}
									>
										<Box
											onClick={handlerPushAccount('/account/info', {location: 'ger'})}
										>
											<User/>
										</Box>
										<Button
											id="composition-button"
											aria-controls={open ? 'composition-menu' : undefined}
											aria-expanded={open ? 'true' : undefined}
											aria-haspopup="true"
											onClick={handleToggle}
										>
											<ArrowUI/>
										</Button>

										<Popper
											id="popper"
											open={open}
											anchorEl={anchorRef.current}
											role={undefined}
											placement="bottom-end"
											transition
											disablePortal
										>
											{({TransitionProps}) => (
												<Grow
													{...TransitionProps}
													style={{
														transformOrigin: 'right bottom',
													}}
												>
													<Paper>
														<ClickAwayListener onClickAway={handleClose}>
															<MenuList
																autoFocusItem={open}
																id="composition-menu"
																aria-labelledby="composition-button"
																onKeyDown={handleListKeyDown}
															>
																<MenuItem
																	onClick={handlerPushAccount('/account/info', {location: 'ger'})}>Личные
																	данные</MenuItem>
																<MenuItem
																	onClick={handlerPushAccount('/account/orders', {tab: 'all'})}>Заказы</MenuItem>
																<MenuItem onClick={handlerLogout}>Выход</MenuItem>
															</MenuList>
														</ClickAwayListener>
													</Paper>
												</Grow>
											)}
										</Popper>

									</UserWrapperUI>
								)}
							</>
						</HeaderNavUI>


					</HeaderContentMUI>
				</HeaderWrapperUI>
			) : (
				<MobileHeader/>
			)}
		</>
	);
};

export default React.memo(Header);
