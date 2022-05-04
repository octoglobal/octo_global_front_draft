import React from 'react';
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
import {useHeaderStyle} from './style';
import HeaderNavLink from './HeaderNavLink/HeaderNavLink';
import HeaderNavLinksArray from './HeaderNavLink/HeaderNavLinkData.json';
import {useCustomSize} from '@/hooks/useMedia';
import WhatsAppIconLarge from '../../../UI/UIIcon/WhatsAppLarge.svg';
import {useHeader} from '@/components/AnyPage/Header/useHeader';
import {SUPPORT_PHONE_RU} from '@/constants/constants';

const Header = () => {

	const {isMobile} = useMobile();
	const {isAuth} = useUserStore();
	const {isCustomSize} = useCustomSize(1240);
	// const {isCustomSize} = useCustomSize(1440);
	// const {isCustomSizeMobile} = useCustomSize(700);

	const navArray: IHeaderNavItemsData = HeaderNavLinksArray;

	const {
		HeaderMarginMUI,
		HeaderBurgerButtonMUI,
		HeaderWrapperUI,
		HeaderContentMUI,
		HeaderNavUI,
		UserWrapperUI,
		ButtonLoginUI,
		ArrowUI,
		LogoMUI,
		IconMarginRight
	} = useHeaderStyle();

	const {
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
	} = useHeader();

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
											onClick={handlerPushToNav(option.href)}
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
							<IconMarginRight
								href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_RU}&text=`}
							>
								<WhatsAppIconLarge/>
							</IconMarginRight>

							<>
								{!isAuth ? (
									<>
										<ButtonUI
											style={ButtonLoginUI}
											onClick={handlerPushLogin}
										>
											Войти
										</ButtonUI>
									</>
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
																	onClick={handlerPushAccount('/account/orders', {tab: '0'})}>Заказы</MenuItem>
																<MenuItem
																	// onClick={()=>{}}
																>Выкуп товара</MenuItem>
																<MenuItem
																	onClick={handlerLogout} style={{color: '#274D82'}} >Выход</MenuItem>
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
