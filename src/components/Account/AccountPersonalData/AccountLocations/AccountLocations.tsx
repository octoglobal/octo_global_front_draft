import React, {FC, useCallback, useState} from 'react';
import {Collapse, Divider} from '@mui/material';

import AddressUser from './AddressUser/AddressUser';
import AddLocationForm from '../../../forms/AddLocationForm/AddLocationForm';
import Tabs from '../../../AnyPage/Tabs/Tabs';
import AccountLocationRules from './AccountLocationRules/AccountLocationRules';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

import { useCustomRouter } from '../../../../hooks/useCustomRouter';

import AccountUrlArray from './AccountTabsLocationData.json';

import { useAccountLocationStyle } from './style';

// interface IAccountLocations {
// 	array?: Array,
// }

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

	const [mockData, setMockData] = useState(
		[
			{
				id: 1,
				name: 'Anastasia',
				surname: 'Khorobrykh',
				phone: '+7 999 446 12 23',
				location: 'г. Челябинск, ул. Труда, д. 99 кв. 1'
			},
			{
				id: 2,
				name: 'Steven',
				surname: 'Mitchell',
				phone: '+7 987 465 76 12',
				location: 'г. Челябинск, ул. Салавата Юлаева, д. 13 кв. 13'
			}
		]
	);

	const handlerToggleState = (setState : (prevState : (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	const handlerDeleteLocation = useCallback((id : number) => {
		console.log('handlerDeleteLocation: ', id);
		console.log('mockData: ', mockData);
		const filteredArray = mockData.filter(item => item.id !== id);
		setMockData(filteredArray);
	}, []);

	console.log('mockData: ', mockData);

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
									{mockData.slice(0, !showAllLoc ? 2 : mockData.length).map((address, i, arr) => (
										<>
											<AddressUser
												key={address.id}
												id={address.id}
												name={address.name}
												surname={address.surname}
												phone={address.phone}
												location={address.location}
												handlerDeleteLocation={handlerDeleteLocation}
											/>
											{i !== (arr.length - 1) &&
												<Divider sx={{borderColor: '#274D82'}} />
											}
										</>
									))}
									<LocationButtonsUI>
										{mockData.length > 2 &&
											<ButtonUI
												style={ButtonShowAll}
												onClick={handlerToggleState(setAllLoc)}
											>
												{!showAllLoc ? 'Показать все адреса' : 'Скрыть все адреса'}
											</ButtonUI>
										}
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
