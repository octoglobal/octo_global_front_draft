import React, {FC, useCallback, useMemo, useState} from 'react';

import PlusLocation from '@/UIIcon/PlusLocation.svg';
import AddressUser from '@/components/Account/AccountPersonalData/AccountLocations/AddressUser/AddressUser';
import {Collapse, Divider} from '@mui/material';
import ButtonUI from '../../../../../UI/UIComponents/ButtonUI/ButtonUI';
import AddLocationForm from '@/components/forms/AddLocationForm/AddLocationForm';
import {useAccountLocationStyle} from '@/components/Account/AccountPersonalData/AccountLocations/style';
import {useUserStore} from '@/hooks/useUserStore';
import {fetchDeleteAddress, fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppDispatch} from '@/hooks/useReduxHooks';

const LocationForm : FC = () => {
	const {
		user: {
			addresses
		}
	} = useUserStore();
	const dispatch = useAppDispatch();

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
				<LocationButtonsUI justifyAlign={!addresses.length}>
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
	);
};

export default React.memo(LocationForm);

const {
	LocationPlusUI,
	LocationFormUI,
	LocationButtonsUI,
	ButtonAdd,
	ButtonShowAll
} = useAccountLocationStyle();
