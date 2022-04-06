import { useUserStore } from '@/hooks/useUserStore';
import React, {FC} from 'react';

import CustomLinkUI from '../../../../UI/UIComponents/LinkUI/LinkUI';
import HeaderNavLinkArray from './HeaderNavLinkData.json';

const HeaderNavLink : FC = () => {

	const {
		isAuth
	} = useUserStore();

	return (
		<>
			{HeaderNavLinkArray.filter(item => isAuth ? true : item.showAuth === isAuth ).map((option) => (
				<CustomLinkUI key={option.title} href={option.href}>
					{option.title}
				</CustomLinkUI>
			))}

			{/*<CustomLinkUI*/}
			{/*	href=""*/}
			{/*>*/}
			{/*	Магазины*/}
			{/*</CustomLinkUI>*/}

			{/*<CustomLinkUI*/}
			{/*	href=""*/}
			{/*>*/}
			{/*	Калькулятор*/}
			{/*</CustomLinkUI>*/}

			{/*<CustomLinkUI*/}
			{/*	href=""*/}
			{/*>*/}
			{/*	Блог*/}
			{/*</CustomLinkUI>*/}

			{/*<CustomLinkUI*/}
			{/*	href=""*/}
			{/*>*/}
			{/*	Стоимость услуг*/}
			{/*</CustomLinkUI>*/}

			{/*<CustomLinkUI*/}
			{/*	href=""*/}
			{/*>*/}
			{/*	Помощь*/}
			{/*</CustomLinkUI>*/}
		</>
	);
};

export default React.memo(HeaderNavLink);
