import React, {FC} from 'react';

import Logotip from '../Logotip/Logotip';

import MenuAuthContent from './MenuAuthContent/MenuAuthContent';
import HeaderMenu from '../../../../UI/UIIcon/HeaderMenu.svg';

import {useHeaderMobileStyle} from './style';
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';

const MobileHeader: FC = () => {

	const {
		HeaderMobileWrapperUI,
		NavMenuUI,
		NavItemUI,
		SwipeableDrawerUI,
	} = useHeaderMobileStyle();

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
						{/* <Moon /> */}
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
