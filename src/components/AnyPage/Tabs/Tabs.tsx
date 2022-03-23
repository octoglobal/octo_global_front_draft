import React, {FC} from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';

import {useCustomRouter} from '../../../hooks/useCustomRouter';
import {useTabsStyle} from './style';

interface ITabsQueryProps {
	location: string;
}

interface ITabsProps {
	data: Array<{
		title: string,
		url: string,
		query: object | ITabsQueryProps
	}>
}

// TODO: добавить interface полям data
const Tabs: FC<ITabsProps> = ({data}) => {

	const {
		TabWrapperUI,
		TabUI,
		TabsListUI
	} = useTabsStyle();

	const {router, pushTo} = useCustomRouter();

	const handlerPushToTab = (url: string, query: object) => {
		let urlTo = router.pathname;
		if(url) urlTo = `/account/${url}`;

		pushTo(urlTo, query);
	};

	const checkActiveClass = (url : string, location : string) : string => {
		if(url) {
			if( router.asPath.includes(url) ) {
				return 'Mui-selected';
			}
		}
		if(location) {
			if(router?.query?.location === location) {
				return 'Mui-selected';
			}
		}

		return '';
	};

	return (
		<TabWrapperUI>
			<TabsUnstyled defaultValue={router.asPath}>
				<TabsListUI>
					{data.map((item, i) => (
						<TabUI
							key={i}
							onClick={() => handlerPushToTab(item?.url, item?.query)}
							className={checkActiveClass(item?.url, item?.query?.location)}
						>
							{item.title}
						</TabUI>
					))}
				</TabsListUI>
			</TabsUnstyled>
		</TabWrapperUI>
	);
};

export default React.memo(Tabs);
