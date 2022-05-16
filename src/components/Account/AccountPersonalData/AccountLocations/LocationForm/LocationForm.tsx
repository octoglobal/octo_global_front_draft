import React, {FC, useState, useMemo, useEffect} from 'react';

import {Collapse, Divider} from '@mui/material';
import ButtonUI from '../../../../../UI/UIComponents/ButtonUI/ButtonUI';
import AddLocationForm from '@/components/forms/AddLocationForm/AddLocationForm';
import {useAccountLocationStyle} from '@/components/Account/AccountPersonalData/AccountLocations/style';
import {useUserStore} from '@/hooks/useUserStore';
import LocationList from '@/components/Account/AccountPersonalData/AccountLocations/LocationList/LocationList';
import {useCustomSize} from '@/hooks/useMedia';

const LocationForm: FC = () => {
	const {
		user: {
			addresses
		},		
	} = useUserStore();	

	
	const {isCustomSize} = useCustomSize(500);

	const [openForm, setOpenForm] = useState<boolean>(false);
	const [showAllLoc, setAllLoc] = useState<boolean>(false);

	const hasLocation = useMemo(
		() => !addresses.length,
		[addresses]
	);

	const handlerToggleState = (setState: (prevState: (state: boolean) => boolean) => void) => {
		return () => {
			setState(prevState => !prevState);
		};
	};

	return (
		<LocationFormUI>
			<>
				<LocationList
					addresses={addresses}
					showAll={showAllLoc}
				/>

				<LocationButtonsUI
					addMargin={ openForm}
					justifyAlign={!addresses.length}
				>
					{/* {addresses && addresses.length > 2 && (
						<ButtonUI
							sx={ButtonShowAll}
							onClick={handlerToggleState(setAllLoc)}
						>
							{!showAllLoc ? 'Показать все адреса' : 'Скрыть все адреса'}
						</ButtonUI>
					)} */}
					{addresses.length > 0 ? (
						<>
							{!openForm && (
								<ButtonUI
									sx={ButtonAdd}
									onClick={handlerToggleState(setOpenForm)}
								>
									Добавить адрес
								</ButtonUI>
							)}
						</>
					) : (
						<Divider sx={{borderColor: '#274D82'}}/>
					)}
				</LocationButtonsUI>

				<Collapse in={hasLocation ? true : openForm}>
					<AddLocationForm
						setOpenForm={handlerToggleState(setOpenForm)}
						textFieldStyles={isCustomSize ? TextFieldMobileSx : {}}
					/>
				</Collapse>
			</>
		</LocationFormUI>
	);
};

export default React.memo(LocationForm);

const {
	LocationFormUI,
	LocationButtonsUI,
	ButtonAdd,
	ButtonShowAll,
	TextFieldMobileSx
} = useAccountLocationStyle();
