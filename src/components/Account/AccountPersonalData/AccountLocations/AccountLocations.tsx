import React, {FC, useState} from 'react';

import Tabs from '../../../AnyPage/Tabs/Tabs';
import AccountUrlArray from './AccountTabsLocationData.json';
import AccountLocationRules from './AccountLocationRules/AccountLocationRules';

import {useAccountLocationStyle} from './style';
import BorderDashed from '@/components/AnyPage/Wrappers/BorderDashed/BorderDashed';

const AccountLocations: FC = () => {
	const [openRules, setOpenRules] = useState<boolean>(false);

	const handlerToggleState = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	return (
		<LocationWrapperUI>
			<BorderDashed title="Адрес для интернет магазина">
				<LocationContainerUI>
					<Tabs data={AccountUrlArray}/>
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
				</LocationContainerUI>
			</BorderDashed>
		</LocationWrapperUI>
	);
};

export default React.memo(AccountLocations);

const {
	LocationButtonUI,
	LocationWrapperUI,
	LocationAddressUI,
	LocationContentUI,
	LocationContainerUI,
} = useAccountLocationStyle();
