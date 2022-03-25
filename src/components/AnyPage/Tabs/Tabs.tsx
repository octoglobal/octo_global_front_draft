import React, {FC} from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';

import {ObjectHasOwnProperty} from '../../../lib/services/services';
import {useCustomRouter} from '../../../hooks/useCustomRouter';
import {useTabsStyle} from './style';

interface ITabsQueryProps {
	[key: string]: string;
}

interface ITabsProps {
	data: Array<{
		title: string,
		url: string,
		query: ITabsQueryProps
	}>
}

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

	const checkActiveClass = (url : string, query : object) : string => {

		const location = ObjectHasOwnProperty(query, 'location') ? query.location : '';

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
							className={checkActiveClass(item.url, item.query)}
							onClick={() => handlerPushToTab(item?.url, item?.query)}
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
