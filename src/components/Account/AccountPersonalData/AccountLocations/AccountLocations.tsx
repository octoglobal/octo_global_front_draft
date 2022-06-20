import React, { FC, useState } from 'react';

// import TabsUnstyled from '@mui/base/TabsUnstyled';
// import AccountUrlArray from './AccountTabsLocationData.json';
// import AccountLocationRules from './AccountLocationRules/AccountLocationRules';
import BorderDashed from '@/components/AnyPage/Wrappers/BorderDashed/BorderDashed';

import { useAppDispatch } from '@/hooks/useReduxHooks';

// import { useTabsStyle } from '@/components/AnyPage/Tabs/style';
import { useAccountLocationStyle } from './style';
import { fetchSendAddress } from '@/store/reducers/sendAdress/asyncActions/sendAdressApi';
import ModalConfirmUI from 'UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

const AccountLocations: FC = () => {
	const [openRules, setOpenRules] = useState<boolean>(false);
	const [selCountry, setSelCountry] = useState<string>('ger');

	const dispatch = useAppDispatch();

	// const handlerToggleState = (
	// 	setState: (prevState: (state: boolean) => boolean) => void
	// ) => {
	// 	return () => {
	// 		setState((prevState) => !prevState);
	// 	};
	// };

	const handlerCountryState = (countryShort: string) => {
		return () => {
			setOpenRules(true);
			setSelCountry(countryShort);
		};
	};

	const sendAdress = () => {
		return () => {
			dispatch(fetchSendAddress({ address: selCountry })).then(() => {
				setOpenRules(false);
			});
		};
	};

	return (
		<LocationWrapperUI>
			<BorderDashed title="Адрес для интернет-магазина">
				<LocationAddressUI>
					Пришлите мне инструкцию для заполнения адреса доставки в{' '}
					<LinkWrapperMUI>
						<LinkMUI onClick={handlerCountryState('Ger')}>
							Германии,
						</LinkMUI>{' '}
					</LinkWrapperMUI>
					<LinkWrapperMUI>
						<LinkMUI onClick={handlerCountryState('Nid')}>
							Нидерландах,
						</LinkMUI>{' '}
					</LinkWrapperMUI>
					<LinkWrapperMUI>
						<LinkMUI onClick={handlerCountryState('Fin')}>
							Финляндии.
						</LinkMUI>{' '}
					</LinkWrapperMUI>
				</LocationAddressUI>

				<ModalConfirmUI
					onClickNo={() => {
						setOpenRules(false);
					}}
					open={openRules}
					title={'Письмо с адресом поступит к Вам в ближайшее время'}
					onClickYes={sendAdress()}
				/>

				{/* <LocationContainerUI>
					<TabWrapperUI>
						<TabsUnstyled>
							<TabsListUI>
								{AccountUrlArray.map((item) => (
									<TabUI
										key={item.title}
										active={
											selCountry === item.query.location
										}
										onClick={handlerCountryState(
											item.query.location
										)}
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
								101 Lukens drive suite H, New Castle, Delaware
								(DE) 19720 <br />
								+1-929-999-57-97
							</LocationAddressUI>

							<LocationButtonUI
								onClick={handlerToggleState(setOpenRules)}
							>
								Как заполнять адрес для доставки
							</LocationButtonUI>

							<AccountLocationRules openRules={openRules} />
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
	LocationAddressUI,
	// LocationContentUI,
	// LocationContainerUI,
	LinkMUI,
	LinkWrapperMUI,
} = useAccountLocationStyle();

// const { TabWrapperUI, TabUI, TabsListUI } = useTabsStyle();
