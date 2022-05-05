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
		query: ITabsQueryProps | object,
		showMobile: boolean
	}>
}

const Tabs: FC<ITabsProps> = ({data}) => {

	const {
		TabWrapperUI,
		TabUI,
		TabsListUI,
		TabsMarginLeft,
		BgMUI
	} = useTabsStyle();

	const {isMobile} = useMobile();
	const isTouchDevice = useMediaQuery('(max-width: 1024px)');

	const {router, pushTo} = useCustomRouter();

	const handlerPushToTab = (url: string, query = {}) => {
		let urlTo = router.pathname;
		if (url) urlTo = `/account/${url}`;

		pushTo(urlTo, query);
	};

	const checkActiveClass = (url: string, query: TabsQueryProps): string => {

		const location = ObjectHasOwnProperty(query, 'location') ? query.location : '';

		if (url) {
			if (router.asPath.includes(url)) {
				return 'Mui-selected';
			}
		}
		if (location) {
			if (router?.query?.location === location) {
				return 'Mui-selected';
			}
		}

		return '';
	};

	const checkShowingTab = useCallback((flag: boolean): boolean => {
		return isMobile ? isMobile && flag : true;
	}, [isMobile]);

	return (
		<TabWrapperUI>
			<TabsUnstyled defaultValue={router.asPath}>
				<TabsListUI>
					{data.map((item, i) => (
						<>
							{checkShowingTab(item.showMobile) ? (
								<TabUI
									key={i}
									className={checkActiveClass(item.url, item.query)}
									onClick={() => {
										if (item.title === 'Заказы' && isTouchDevice) return;
										handlerPushToTab(item.url, item.query);
									}}
								>
									<>
										{item.title === 'Заказы' && isTouchDevice ? (
											<AccountTabOrderMobile/>
										) : (
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
						</>
					))}
				</TabsListUI>
			</TabsUnstyled>
		</TabWrapperUI>
	);
};

export default React.memo(Tabs);
