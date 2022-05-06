import React, {FC, useMemo} from 'react';
import { useUserStore } from '@/hooks/useUserStore';

import {useMobile ,useTablet} from '@/hooks/useMedia';
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

	const {isMobile,} = useMobile();
	const {isTablet} = useTablet();

	const navLinksArray = useMemo(() =>{
	
		if (isTablet){
			return navDataArray.tablet;
		} else {
			return isMobile ? navDataArray.mobile : navDataArray.desktop;
		}
	},[isMobile,isTablet]
	);

	return (
		<>
			{navLinksArray.filter(item => isAuth ? true : item.showAuth === isAuth).map((option) => (
				<CustomLinkUI key={option.title} href={option.href} onClick={toggleOpenMenu}>
					{option.title}
				</CustomLinkUI>
			))}
		</>
	);
};

export default React.memo(HeaderNavLink);
