import React from 'react';

import User from '../User/User';
import CustomLinkUI from '../../../UI/UIComponents/LinkUI/LinkUI';
import OctoGlobal from '../../../UI/UIIcon/OctoGlobal.svg';
import OctoGlobalTextIcon from '../../../UI/UIIcon/OctoGlobalTextIcon.svg';
import {useUserStore} from '@/hooks/useUserStore';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useCustomRouter} from '../../../hooks/useCustomRouter';

import {useHeaderStyle} from './style';

const Header = () => {

	const {
		HeaderWrapperUI,
		HeaderNavUI,
		UserWrapperUI,
		OctoIconsUI,
		ButtonLoginUI
	} = useHeaderStyle();

	const {
		user: {
			id,
			// name, surname
		},
		isAuth
	} = useUserStore();

	const {pushTo} = useCustomRouter();

	const handlerPushLogin = () => {
		pushTo('/login');
	};

	const handlerPushHome = () => {
		pushTo('/');
	};

	const handlerPushAccount = () => {
		return () => {
			pushTo('/account/info');
		};
	};

	return (
		<HeaderWrapperUI>
			<OctoIconsUI
				onClick={handlerPushHome}
			>
				<OctoGlobal />
				<OctoGlobalTextIcon />
			</OctoIconsUI>

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
	);
};

export default React.memo(Header);
