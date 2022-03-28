import React, { FC, useState } from 'react';
import {Collapse, Divider} from '@mui/material';

import AddressUser from './AddressUser/AddressUser';
import AddLocationForm from '../../../forms/AddLocationForm/AddLocationForm';
import Tabs from '../../../AnyPage/Tabs/Tabs';
import AccountLocationRules from './AccountLocationRules/AccountLocationRules';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

import { useCustomRouter } from '../../../../hooks/useCustomRouter';

import AccountUrlArray from './AccountTabsLocationData.json';
import AccountAddressUserArray from './AccountAddressUserData.json';


import { useAccountLocationStyle } from './style';

const AccountLocations: FC = () => {
	const {
		TypographyUI,
		LocationButtonUI,
		BorderWrapperUI,
		LocationWrapperUI,
		LocationAddressUI,
		LocationContentUI,
		LocationContainerUI,
		LocationFormUI,
		LocationButtonsUI,
		ButtonAdd,
		ButtonShowAll
	} = useAccountLocationStyle();

	const { router } = useCustomRouter();

	const [openRules, setOpenRules] = useState<boolean>(false);
	const [operForm, setOpenForm] = useState<boolean>(false);
	const [showAllLoc, setAllLoc] = useState<boolean>(false);

	const handlerToggleState = (setState : (prevState : (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	return (
		<LocationWrapperUI>
			<BorderWrapperUI>
				<LocationContainerUI>
					<TypographyUI>Адреса</TypographyUI>
					<Tabs data={AccountUrlArray} />
					<LocationContentUI>
						{router?.query?.location === 'rus' ? (
							<LocationFormUI>
								<>
									{AccountAddressUserArray.slice(0, !showAllLoc ? 2 : AccountAddressUserArray.length).map((address, i, arr) => (
										<>
											<AddressUser
												key={address.id}
												id={address.id}
												name={address.name}
												surname={address.surname}
												phone={address.phone}
												location={address.location}
											/>
											{i !== (arr.length - 1) &&
												<Divider sx={{borderColor: '#274D82'}} />
											}
										</>
									))}
									<LocationButtonsUI>
										<ButtonUI
											style={ButtonShowAll}
											onClick={handlerToggleState(setAllLoc)}
										>
											{!showAllLoc ? 'Показать все адреса' : 'Скрыть все адреса'}
										</ButtonUI>
										{!operForm ? (
											<ButtonUI
												style={ButtonAdd}
												onClick={handlerToggleState(setOpenForm)}
											>
													Добавить адрес
											</ButtonUI>
										): (
											<Divider sx={{borderColor: '#274D82'}} />
										)}
									</LocationButtonsUI>
									<Collapse in={operForm}>
										<AddLocationForm
											setOpenForm={handlerToggleState(setOpenForm)}
										/>
									</Collapse>
								</>
							</LocationFormUI>
						) : (
							<>
								<LocationAddressUI>
									101 Lukens drive suite H, New Castle,
									Delaware (DE) 19720 +1-929-999-57-97
								</LocationAddressUI>

								<LocationButtonUI onClick={handlerToggleState(setOpenRules)}>
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
