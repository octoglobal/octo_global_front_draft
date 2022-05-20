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
import LinkUI from 'UI/UIComponents/LinkUI/LinkUI';
import HeaderPayment from '@/components/AnyPage/Header/HeaderPayment/HeaderPayment';
import {useAppSelector} from '@/hooks/useReduxHooks';
import {usePayment} from '@/hooks/usePayment';

const Header = () => {

	const {
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);

	const {isMobile} = useMobile();
	const {isAuth, isAdmin} = useUserStore();
	const {isCustomSize} = useCustomSize(1240);
	const {isCustomSize: isTablet} = useCustomSize(959);

	const navArray: IHeaderNavItemsData = HeaderNavLinksArray;

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

	const {
		handleOpenPaymentForm,
	} = usePayment();


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
											maxHeight: '268px',
											width: '20ch',
										},
									}}
								>
									{isCustomSize? (
										<>
											{navArray.tablet.map((option) => (
												<MenuItem
													key={option.title}
													selected={option.title === 'Pyxis'}
													onClick={handlerPushToNav(option.href)}
												>
													{option.title}
												</MenuItem>
											))}
											{isAuth && (
												<>
													{(!isAdmin || (isAdmin && adminSwitchIdToUser)) && isTablet && (
														<MenuItem
															key={'payment'}
															onClick={() => {
																handleCloseBurger();
																handleOpenPaymentForm();
															}}
														>
															Кошелёк
														</MenuItem>
													)}
													<MenuItem
														key='exit'
														sx={{
															color: '#203f69'
														}}
														onClick={() => {
															handlerLogout();
															handleCloseBurger();
														}}
													>
														Выход
													</MenuItem>
												</>
											)}
										</>
									) : navArray.desktop.map((option) => (
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
							<LinkUI href='/'>
								<Logotip/>
							</LinkUI>

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
																{/* <MenuItem
																	onClick={handlerPushAccount('/account/info', {location: 'ger'})}>Личные
																	данные</MenuItem>
																<MenuItem
																	onClick={handlerPushAccount('/account/orders/wait')}>
																		Заказы
																</MenuItem> */}
																{/* <MenuItem
																	// onClick={()=>{}}
																>Выкуп товара</MenuItem> */}
																<MenuItem
																	onClick={handlerLogout} style={{color: '#274D82'}} >Выход</MenuItem>
															</MenuList>
														</ClickAwayListener>
													</Paper>
												</Grow>
											)}
										</Popper>
										{!isAdmin && (
											<HeaderPayment/>
										)}
										{isAdmin && adminSwitchIdToUser && (
											<HeaderPayment/>
										)}
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

export default React.memo(Header);
