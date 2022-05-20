import React, {FC, useCallback} from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
// import Link from 'next/link';

import {ObjectHasOwnProperty} from '@/services/services';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useTabsStyle} from './style';
import {useMobile} from '@/hooks/useMedia';
// import LightningInsideCircle from '../../../UI/UIIcon/LightningInsideCircle.svg';
import LightningInsideCircle44 from '../../../UI/UIIcon/LightningInsideCircleTransp.svg';
import AccountTabOrderMobile from '@/components/Account/AccountTabOrderMobile/AccountTabOrderMobile';
import { useMediaQuery } from '@mui/material';
import {useUserStore} from '@/hooks/useUserStore';
// import EuroExchange from '../EuroExchange/EuroExchange';
import EuroExchange from '@/components/AnyPage/EuroExchange/EuroExchange';


type TabsQueryProps = {
	location?: string;
};

interface ITabsQueryProps {
	[key: string]: string;

	location: string;
}

interface ITabsProps {
	data: Array<{
		title: string,
		url: string,
		baseUrl?: string,
		query: ITabsQueryProps | object,
		showMobile: boolean
	}>
}

const Tabs: FC<ITabsProps> = ({data}) => {

	const {isMobile} = useMobile();
	const isTouchDevice = useMediaQuery('(max-width: 1024px)');
	const {
		isAdmin
	} = useUserStore();

	const {router, pushTo} = useCustomRouter();

	const handlerPushToTab = (url: string) => {
		let urlTo = router.pathname;
		if (url) urlTo = `/account/${url}`;
		if (!isAdmin) {
			pushTo(urlTo);
		} else {
			const pathname = router.asPath;
			const userId = pathname?.split('userId=')[1]?.split('&')[0];
			pushTo(urlTo, {userId});
		}
	};

	const checkActiveClass = (url: string, query: TabsQueryProps, baseUrl = ''): boolean => {

		const location = ObjectHasOwnProperty(query, 'location') ? query.location : '';

		if (url) {
			if (router.asPath.includes(url)) {
				// return 'Mui-selected';
				return true;
			}
			if(baseUrl && router.asPath.includes(baseUrl))return true;

		}
		if (location) {
			if (router?.query?.location === location) {
				// return 'Mui-selected';
				return true;
			}
		}
		return false;
	};

	const checkShowingTab = useCallback((flag: boolean): boolean => {
		return isMobile ? isMobile && flag : true;
	}, [isMobile]);

	return (
		<TabWrapperUI>
			<TabsUnstyled defaultValue={router.asPath}>
				
				{isMobile? isAdmin? null:<EuroExchange></EuroExchange>: null}
				
				<TabsListUI>
					{isMobile? null: isAdmin? null:<EuroExchange></EuroExchange>}
					{data.map((item) => (
						<React.Fragment key={item.title}>
							{checkShowingTab(item.showMobile) ? (
								<TabUI
									// key={i}
									active={checkActiveClass(item.url, item.query, item?.baseUrl)}
									onClick={() => {
										if (item.title === 'Заказы' && isTouchDevice) return;
										handlerPushToTab(item.url);
									}}
								>
									<>
										{item.title === 'Заказы' && isTouchDevice ? (
											<AccountTabOrderMobile
												active={checkActiveClass(item.url, item.query, item?.baseUrl)}
											/>
										) : item.title == 'Выкуп товара' && isAdmin ? null : (
											<>
												{item.title}
												{item.title === 'Выкуп товара'
													? <TabsMarginLeft>
														<BgMUI>
															<LightningInsideCircle44></LightningInsideCircle44>
														</BgMUI>
													</TabsMarginLeft>
													: ''
												}
											</>
										)}
									</>
								</TabUI>
							) : null}
						</React.Fragment>
					))}
				</TabsListUI>
			</TabsUnstyled>
		</TabWrapperUI>
	);
};

const {
	TabWrapperUI,
	TabUI,
	TabsListUI,
	TabsMarginLeft,
	BgMUI,
	
} = useTabsStyle();

export default React.memo(Tabs);
