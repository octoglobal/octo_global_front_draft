import React, {FC, useMemo} from 'react';
import { useUserStore } from '@/hooks/useUserStore';

import {useMobile} from '@/hooks/useMedia';
import CustomLinkUI from '../../../../UI/UIComponents/LinkUI/LinkUI';
import HeaderNavLinkArray from './HeaderNavLinkData.json';
import {IHeaderNavItemsData} from '../../../../types/types';

interface IHeaderNavLink {
	toggleOpenMenu?: () => void,
}

const HeaderNavLink : FC<IHeaderNavLink> = ({toggleOpenMenu}) => {

	const navDataArray : IHeaderNavItemsData = HeaderNavLinkArray;

	const {
		isAuth
	} = useUserStore();

	const {isMobile} = useMobile();

	const navLinksArray = useMemo(
		() => isMobile ? navDataArray.mobile : navDataArray.desktop,
		[isMobile]
	);

	return (
		<>
			{navLinksArray.filter(item => isAuth ? true : item.showAuth === isAuth).map((option) => (
				<CustomLinkUI key={option.title} href={option.href} onClick={toggleOpenMenu}>
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
