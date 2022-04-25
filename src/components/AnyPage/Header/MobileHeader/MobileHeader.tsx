import React, {FC} from 'react';

import Logotip from '../Logotip/Logotip';

import MenuAuthContent from './MenuAuthContent/MenuAuthContent';
import HeaderMenu from '../../../../UI/UIIcon/HeaderMenu.svg';
import WhatsAppLarge from '../../../../UI/UIIcon/WhatsAppLarge.svg';

import {useHeaderMobileStyle} from './style';
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';
import {SUPPORT_PHONE_RU} from '@/constants/constants';

const MobileHeader: FC = () => {

	// const {isHomePage} = useHeader();

	const {
		open,
		toggleDrawer, toggleTab
	} = useSwipeableDrawerStore();

	const handlerNav : React.MouseEventHandler<HTMLDivElement>  = () : void => {
		toggleDrawer();
	};

	const handlerClearDrawer = () => {
		toggleDrawer(false);
		toggleTab('');
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
						<a href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_RU}&text=`}>
							<WhatsAppLarge />
						</a>
					</NavItemUI>
				</NavMenuUI>
			</HeaderMobileWrapperUI>
			<SwipeableDrawerUI
				anchor="left"
				open={open}
				// onOpen={() => setOpenMenu(true)}
				// onClose={() => setOpenMenu(false)}
				onOpen={() => toggleDrawer(true)}
				onClose={handlerClearDrawer}
			>
				<MenuAuthContent />
			</SwipeableDrawerUI>

		</>
	);
};

export default React.memo(MobileHeader);

const {
	HeaderMobileWrapperUI,
	NavMenuUI,
	NavItemUI,
	SwipeableDrawerUI,
} = useHeaderMobileStyle();
