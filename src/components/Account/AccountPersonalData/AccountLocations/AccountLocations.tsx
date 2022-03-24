import React, { FC, useState } from 'react';

import AddressUser from './AddressUser/AddressUser';
import AddLocationForm from '../../../forms/AddLocationForm/AddLocationForm';
import AccountUrlArray from './AccountTabsLocationData.json';
import Tabs from '../../../AnyPage/Tabs/Tabs';
import AccountLocationRules from './AccountLocationRules/AccountLocationRules';

import { useCustomRouter } from '../../../../hooks/useCustomRouter';

import { useAccountLocationStyle } from './style';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

const AccountLocations: FC = () => {
	const {
		TypographyUI,
		LocationButtonUI,
		BorderWrapperUI,
		LocationWrapperUI,
		LocationAddressUI,
		LocationContentUI,
		LocationContainerUI,
		ButtonAdd
	} = useAccountLocationStyle();

	const { router } = useCustomRouter();

	const [openRules, setOpenRules] = useState(false);

	const handlerOpenPromt = () => {
		setOpenRules(!openRules);
	};

	return (
		<LocationWrapperUI>
			<BorderWrapperUI>
				<LocationContainerUI>
					<TypographyUI>Адреса</TypographyUI>
					<Tabs data={AccountUrlArray} />
					<LocationContentUI>
						{router?.query?.location === 'rus' ? (
							<>
								{/* TODO: вынести в отдельный компонент и выводить прошлые формы и новую при кнопке добавить адрес */}
								<AddressUser />
								<ButtonUI
									style={ButtonAdd}
								>
									+ Добавить адрес
								</ButtonUI>
								<AddLocationForm />
							</>
						) : (
							<>
								<LocationAddressUI>
									101 Lukens drive suite H, New Castle,
									Delaware (DE) 19720 +1-929-999-57-97
								</LocationAddressUI>

								<LocationButtonUI onClick={handlerOpenPromt}>
									Как заполнять
								</LocationButtonUI>

								<AccountLocationRules openRules={openRules} />
							</>
						)}
					</LocationContentUI>
				</LocationContainerUI>
			</BorderWrapperUI>
		</LocationWrapperUI>
	);
};

export default React.memo(AccountLocations);
