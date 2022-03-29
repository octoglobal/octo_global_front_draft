import React, {FC, useState} from 'react';

import Logotip from '../Logotip/Logotip';

import HeaderMenu from '../../../../UI/UIIcon/HeaderMenu.svg';
import Moon from '../../../../UI/UIIcon/Moon.svg';

import {useHeaderMobileStyle} from './style';
// import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';

const MobileHeader: FC = () => {

	const {
		HeaderMobileWrapperUI,
		NavMenuUI,
		NavItemUI,
		SwipeableDrawerUI
	} = useHeaderMobileStyle();

	const [openMenu, setOpenMenu] = useState(false);

	const handlerOpenMenu = () => {
		setOpenMenu(prevState => !prevState);
	};

	return (
		<>
			<HeaderMobileWrapperUI>
				<NavMenuUI>
					<NavItemUI onClick={handlerOpenMenu}>
						<HeaderMenu />
					</NavItemUI>
					<NavItemUI>
						<Logotip />
					</NavItemUI>
					<NavItemUI>
						<Moon />
					</NavItemUI>
				</NavMenuUI>
			</HeaderMobileWrapperUI>
			<SwipeableDrawerUI
				anchor="left"
				open={openMenu}
				onOpen={() => setOpenMenu(true)}
				onClose={() => setOpenMenu(false)}
			>
				<div>123</div>
			</SwipeableDrawerUI>
		</>
	);
};

export default React.memo(MobileHeader);