import React from 'react';

import MobileHeader from './MobileHeader/MobileHeader';
import User from '../User/User';
import CustomLinkUI from '../../../UI/UIComponents/LinkUI/LinkUI';
import Logotip from '../../AnyPage/Header/Logotip/Logotip';

import {useMobile} from '../../../hooks/useMedia';
import {useUserStore} from '@/hooks/useUserStore';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useCustomRouter} from '../../../hooks/useCustomRouter';

import {useHeaderStyle} from './style';

const Header = () => {

	const {
		HeaderWrapperUI,
		HeaderNavUI,
		UserWrapperUI,
		ButtonLoginUI
	} = useHeaderStyle();

	const {
		// user: {
		// 	id,
		// 	// name, surname
		// },
		isAuth
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
						<CustomLinkUI
							href="#"
						>
							Магазины
						</CustomLinkUI>

						<CustomLinkUI
							href="#"
						>
							Калькулятор
						</CustomLinkUI>

						<CustomLinkUI
							href="#"
						>
							Блог
						</CustomLinkUI>

						<CustomLinkUI
							href="#"
						>
							Стоимость услуг
						</CustomLinkUI>

						<CustomLinkUI
							href="#"
						>
							Помощь
						</CustomLinkUI>

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
