import React, {FC, useState} from 'react';

import Tabs from '../../../AnyPage/Tabs/Tabs';
import LocationForm from './LocationForm/LocationForm';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import AccountUrlArray from './AccountTabsLocationData.json';
import AccountLocationRules from './AccountLocationRules/AccountLocationRules';

import {useAccountLocationStyle} from './style';

const AccountLocations: FC = () => {
	const {router} = useCustomRouter();

	const [openRules, setOpenRules] = useState<boolean>(false);

	const handlerToggleState = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	return (
		<LocationWrapperUI>
			<BorderWrapperUI>
				<LocationContainerUI>
					<TypographyUI>Адреса</TypographyUI>
					<Tabs data={AccountUrlArray}/>
					<LocationContentUI>
						{router?.query?.location === 'rus' ? (
							<LocationForm />
						) : (
							<>
								<LocationAddressUI>
									101 Lukens drive suite H, New Castle,
									Delaware (DE) 19720 <br />+1-929-999-57-97
								</LocationAddressUI>

								<LocationButtonUI onClick={handlerToggleState(setOpenRules)}>
									Как заполнять адрес для доставки
								</LocationButtonUI>

								<AccountLocationRules openRules={openRules}/>
							</>
						)}
					</LocationContentUI>
				</LocationContainerUI>
			</BorderWrapperUI>
		</LocationWrapperUI>
	);
};

export default React.memo(AccountLocations);

const {
	TypographyUI,
	LocationButtonUI,
	BorderWrapperUI,
	LocationWrapperUI,
	LocationAddressUI,
	LocationContentUI,
	LocationContainerUI,
} = useAccountLocationStyle();
