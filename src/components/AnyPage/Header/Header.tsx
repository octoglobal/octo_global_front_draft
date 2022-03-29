import React from 'react';

import MobileHeader from './MobileHeader/MobileHeader';
import User from '../User/User';
import Logotip from '../../AnyPage/Header/Logotip/Logotip';

import {useMobile} from '../../../hooks/useMedia';
import {useUserStore} from '@/hooks/useUserStore';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useCustomRouter} from '../../../hooks/useCustomRouter';

import {useHeaderStyle} from './style';
import HeaderNavLink from './HeaderNavLink/HeaderNavLink';

const Header = () => {

	const {
		HeaderWrapperUI,
		HeaderNavUI,
		UserWrapperUI,
		ButtonLoginUI,
		ArrowUI
	} = useHeaderStyle();

	const {
		// user: {
		// 	id,
		// 	// name, surname
		// },
		isAuth,
		// loading
	} = useUserStore();

	const {isMobile} = useMobile();

	const {pushTo} = useCustomRouter();

	const handlerPushLogin = () => {
		pushTo('/login');
	};

	const handlerPushAccount = () => {
		return () => {
			pushTo('/account/info');
		};
	};

	return (
		<>
			{!isMobile ? (
				<HeaderWrapperUI>
					<Logotip />

					<HeaderNavUI>
						<HeaderNavLink />
						<div>
							{!isAuth ? (
								<ButtonUI
									style={ButtonLoginUI}
									onClick={handlerPushLogin}
								>
									Войти
								</ButtonUI>
							) : (
								<UserWrapperUI
									onClick={handlerPushAccount()}
								>
									{/* <User name={name} surname={surname} /> */}
									<User />
									<ArrowUI />
								</UserWrapperUI>
							)}
						</div>


					</HeaderNavUI>
				</HeaderWrapperUI>
			) : (
				<MobileHeader />
			)}
		</>
	);
};

export default React.memo(Header);
