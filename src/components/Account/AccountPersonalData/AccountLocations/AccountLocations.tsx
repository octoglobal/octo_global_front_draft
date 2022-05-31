import React, {FC, /*useState*/} from 'react';

// import TabsUnstyled from '@mui/base/TabsUnstyled';
// import AccountUrlArray from './AccountTabsLocationData.json';
// import AccountLocationRules from './AccountLocationRules/AccountLocationRules';

import {useAccountLocationStyle} from './style';
import BorderDashed from '@/components/AnyPage/Wrappers/BorderDashed/BorderDashed';
// import {useTabsStyle} from '@/components/AnyPage/Tabs/style';

const AccountLocations: FC = () => {
	// const [openRules, setOpenRules] = useState<boolean>(false);
	// const [selCountry, setSelCountry] = useState<string>('ger');

	// const handlerToggleState = (setState: (prevState: (state: boolean) => boolean) => void) => {
	// 	return () => {
	// 		setState(prevState => !prevState);
	// 	};
	// };

	// const handlerCountryState = (countryShort: string) => {
	// 	return () => {
	// 		setSelCountry(countryShort);
	// 	};
	// };

	return (
		<LocationWrapperUI>
			<BorderDashed title="Адрес для интернет-магазина">
				{/* <LocationContainerUI>
				
					<TabWrapperUI>
						<TabsUnstyled>
							<TabsListUI>
								{AccountUrlArray.map((item) => (
									<TabUI
										key={item.title}
										active={selCountry === item.query.location}
										onClick={handlerCountryState(item.query.location)}
									>
										{item.title}
									</TabUI>
								))}
							</TabsListUI>
						</TabsUnstyled>
					</TabWrapperUI>

					<LocationContentUI>
						<>
							<LocationAddressUI>
								101 Lukens drive suite H, New Castle,
								Delaware (DE) 19720 <br/>+1-929-999-57-97
							</LocationAddressUI>

							<LocationButtonUI onClick={handlerToggleState(setOpenRules)}>
								Как заполнять адрес для доставки
							</LocationButtonUI>

							<AccountLocationRules openRules={openRules}/>
						</>
					</LocationContentUI>
				</LocationContainerUI> */}
			</BorderDashed>
		</LocationWrapperUI>
	);
};

export default React.memo(AccountLocations);

const {
	// LocationButtonUI,
	LocationWrapperUI,
	// LocationAddressUI,
	// LocationContentUI,
	// LocationContainerUI,
} = useAccountLocationStyle();

// const {
// 	TabWrapperUI,
// 	TabUI,
// 	TabsListUI,
// } = useTabsStyle();
