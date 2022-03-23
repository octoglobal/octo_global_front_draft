import React from 'react';

import User from '../User/User';
import CustomLinkUI from '../../../UI/UIComponents/LinkUI/LinkUI';
import OctoGlobal from '../../../UI/UIIcon/OctoGlobal.svg';
import OctoGlobalTextIcon from '../../../UI/UIIcon/OctoGlobalTextIcon.svg';
import {useHeaderStyle} from './style';
import {useUserStore} from '@/hooks/useUserStore';

const Header = () => {

	const {
		HeaderWrapperUI,
		UserWrapperUI,
		OctoIconsUI
	} = useHeaderStyle();

	const {
		user: {
			name, surname
		}
	} = useUserStore();

	return (
		<HeaderWrapperUI>
			<OctoIconsUI>
				<OctoGlobal />
				<OctoGlobalTextIcon />
			</OctoIconsUI>

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

			<UserWrapperUI>
				<User name={name} surname={surname} />
			</UserWrapperUI>

		</HeaderWrapperUI>
	);
};

export default React.memo(Header);
