import React, {FC, useCallback, useState, useMemo} from 'react';
import {Collapse, Divider} from '@mui/material';

import AddressUser from './AddressUser/AddressUser';
import AddLocationForm from '../../../forms/AddLocationForm/AddLocationForm';
import Tabs from '../../../AnyPage/Tabs/Tabs';
import AccountLocationRules from './AccountLocationRules/AccountLocationRules';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import PlusLocation from '../../../../UI/UIIcon/PlusLocation.svg';

import {useCustomRouter} from '@/hooks/useCustomRouter';

import AccountUrlArray from './AccountTabsLocationData.json';

import {useAccountLocationStyle} from './style';
import {useUserStore} from '@/hooks/useUserStore';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchDeleteAddress} from '@/reducers/userSlice/asyncActions/userApi';
import {fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';

const AccountLocations: FC = () => {

	const {
		user: {
			addresses
		}
	} = useUserStore();

	const {router} = useCustomRouter();

	const dispatch = useAppDispatch();

	const {
		TypographyUI,
		LocationButtonUI,
		BorderWrapperUI,
		LocationWrapperUI,
		LocationAddressUI,
		LocationContentUI,
		LocationContainerUI,
		LocationPlusUI,
		LocationFormUI,
		LocationButtonsUI,
		ButtonAdd,
		ButtonShowAll
	} = useAccountLocationStyle();

	const [openRules, setOpenRules] = useState<boolean>(false);
	const [operForm, setOpenForm] = useState<boolean>(false);
	const [showAllLoc, setAllLoc] = useState<boolean>(false);

	const hasAddress = useMemo(() => typeof addresses !== 'undefined', [addresses]);

	const handlerToggleState = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	const handlerDeleteLocation = useCallback((id: number) => {
		dispatch(fetchDeleteAddress({address_id: id}))
			//TODO: проверить на ошибку
			.then(() => {
				dispatch(fetchUserAutoLogin());
			});
	}, []);

	return (
		<LocationWrapperUI>
			<BorderWrapperUI>
				<LocationContainerUI>
					<TypographyUI>Адреса</TypographyUI>
					<Tabs data={AccountUrlArray}/>
					<LocationContentUI>
						{router?.query?.location === 'rus' ? (
							<LocationFormUI>
								<>
									{!operForm && !addresses?.length && (
										<LocationPlusUI>
											<PlusLocation
												onClick={handlerToggleState(setOpenForm)}
											/>
										</LocationPlusUI>
									)}
									{/*TODO: сократить и вынести*/}
									{hasAddress && addresses.slice(0, !showAllLoc ? 2 : addresses?.length).map((address, i, arr) => (
										<>
											<AddressUser
												key={address.id}
												id={address.id}
												name={address.name}
												surname={address.surname}
												phone={address.phone}
												location={address.address_string}
												handlerDeleteLocation={handlerDeleteLocation}
											/>
											{i !== (arr.length - 1) &&
                                                <Divider sx={{borderColor: '#274D82', width: '100%'}}/>
											}
										</>
									))}
									<LocationButtonsUI>
										{addresses && addresses.length > 2 && (
											<ButtonUI
												style={ButtonShowAll}
												onClick={handlerToggleState(setAllLoc)}
											>
												{!showAllLoc ? 'Показать все адреса' : 'Скрыть все адреса'}
											</ButtonUI>
										)}
										{!operForm ? (
											<ButtonUI
												style={ButtonAdd}
												onClick={handlerToggleState(setOpenForm)}
											>
												Добавить адрес
											</ButtonUI>
										) : (
											<Divider sx={{borderColor: '#274D82'}}/>
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
