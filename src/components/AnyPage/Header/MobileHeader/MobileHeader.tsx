import React, {FC} from 'react';

import Logotip from '../Logotip/Logotip';

import MenuAuthContent from './MenuAuthContent/MenuAuthContent';
import HeaderMenu from '../../../../UI/UIIcon/HeaderMenu.svg';
import WhatsAppLarge from '../../../../UI/UIIcon/WhatsAppLarge.svg';

import {useHeaderMobileStyle} from './style';
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';
import {useUserStore} from '@/hooks/useUserStore';

const MobileHeader: FC = () => {

	const {
		HeaderMobileWrapperUI,
		NavMenuUI,
		NavItemUI,
		SwipeableDrawerUI,
	} = useHeaderMobileStyle();

	const {
		isAuth
	} = useUserStore();

	const {
		open,
		toggleDrawer
	} = useSwipeableDrawerStore();

	const handlerNav : React.MouseEventHandler<HTMLDivElement>  = () : void => {
		toggleDrawer();
	};

	return (
		<>
			<HeaderMobileWrapperUI>
				<NavMenuUI>
					<NavItemUI onClick={handlerNav}>
						<HeaderMenu />
					</NavItemUI>
					<NavItemUI>
						{/*{router.route !== '/' && <Logotip />}*/}
						<Logotip />
					</NavItemUI>
					<NavItemUI>
						{/*{!isAuth ? <WhatsAppLarge /> : <></>}*/}
					</NavItemUI>
				</NavMenuUI>
			</HeaderMobileWrapperUI>
			<SwipeableDrawerUI
				anchor="left"
				open={open}
				// onOpen={() => setOpenMenu(true)}
				// onClose={() => setOpenMenu(false)}
				onOpen={() => toggleDrawer(true)}
				onClose={() => toggleDrawer(false)}
			>
				<MenuAuthContent />
			</SwipeableDrawerUI>
		</>
	);
};

export default React.memo(MobileHeader);
