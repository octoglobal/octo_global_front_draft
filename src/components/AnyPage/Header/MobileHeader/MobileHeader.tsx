import React, {FC, useState} from 'react';

import Logotip from '../Logotip/Logotip';

import MenuAuthContent from './MenuAuthContent/MenuAuthContent';
import HeaderMenu from '../../../../UI/UIIcon/HeaderMenu.svg';
// import Moon from '../../../../UI/UIIcon/Moon.svg';

import {useHeaderMobileStyle} from './style';
import {useCustomRouter} from '@/hooks/useCustomRouter';
// import SignUpForm from '@/components/forms/SignUpForm/SignUpForm';

const MobileHeader: FC = () => {

	const {router} = useCustomRouter();

	const {
		HeaderMobileWrapperUI,
		NavMenuUI,
		NavItemUI,
		SwipeableDrawerUI,
	} = useHeaderMobileStyle();

	const [openMenu, setOpenMenu] = useState<boolean>(false);

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
				open={openMenu}
				onOpen={() => setOpenMenu(true)}
				onClose={() => setOpenMenu(false)}
			>
				<MenuAuthContent
					setOpenMenu={setOpenMenu}
				/>
			</SwipeableDrawerUI>
		</>
	);
};

export default React.memo(MobileHeader);
