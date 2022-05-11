import React, {FC, useMemo} from 'react';
import {IPackageModel} from '@/models/IPackageModel';
import {usePackageItemStyles} from '@/components/AnyPage/PackageItem/style';
import OrderItem, {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import {IDropItem} from '../../../UI/UIComponents/DropDownUI/type';
import {usePackageItem} from '@/components/AnyPage/PackageItem/usePackageItem';
import OrderStatusModal from '@/components/AnyPage/OrderItem/OrderStatusModal/OrderStatusModal';
import ArrowRightIcon from '../../../UI/UIIcon/Arrow_Blue.svg';
import {SxProps} from '@mui/material';
import ModalConfirmUI from '../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

interface IPackageItem {
	component: ComponentType,
	packageData: IPackageModel
	dropItems: IDropItem[],
	isVisibleTrackNumber?: boolean,
}

const PackageItem: FC<IPackageItem> = (
	{
		packageData,
		component,
		dropItems,
		isVisibleTrackNumber = false,
	}
) => {

	const {
		id,
		orders,
		longId,
		isStatus,
		orderItem,
		isChangeStatus,
		isVisibleAddress,
		isDropDownVisible,
		handleDeletePackage,
		handleAddTrackNumber,
		orderContainerStyles,
		isDeletePackageModal,
		handleToggleDeleteModal,
		isDeleteTrackNumberModal,
		modificationDropItemArray,
		handleDeleteTrackNumber,
		handleToggleDeleteTrackNumberModal,
	} = usePackageItem(packageData, dropItems, component);

	const isVisibleStatus = useMemo(() => (
		isStatus.visible && isStatus.visibleText && !isVisibleTrackNumber
	), [isStatus, isVisibleTrackNumber]);

	const sendPageStyleDropDownUI = useMemo(() => {
		if (component == 'send') return {width: '200px'};
		return {};
	}, [component]);

	return (
		<ContainerMUI>
			<TitleMUI>
				<TitleTextMUI>
					<TextMUI>
						Посылка № {longId}
					</TextMUI>
					{isVisibleStatus && (
						<StatusTextMUI>
							{isStatus.text}
						</StatusTextMUI>
					)}
					{isVisibleTrackNumber && (
						<TrackNumberContainerMUI>
							<TrackNumberMUI>{packageData.trackNumber}</TrackNumberMUI>
							<TrackNumberLinkMUI
								rel='noreferrer'
								href={packageData.tracking_link as string}
								target='_blank'
							>
								<TrackNumberLinkTextMUI>
									Отследить
								</TrackNumberLinkTextMUI>
								<TrackNumberIconMUI>
									<ArrowRightIcon/>
								</TrackNumberIconMUI>
							</TrackNumberLinkMUI>
						</TrackNumberContainerMUI>
					)}
				</TitleTextMUI>
				{isDropDownVisible && (
					<DropDownUI
						itemId={id}
						containerStyles={sendPageStyleDropDownUI}
						dropItems={modificationDropItemArray}
					/>
				)}
			</TitleMUI>
			<OrdersContainerMUI sx={orderContainerStyles as SxProps}>
				{orders.map(order => (
					<OrderItem
						key={`${order.id}${order.longId}`}
						orderItem={order}
						visibleDropDown={false}
						visibleCheckbox={false}
						visibleTrackNumber={false}
						visibleTitle={false}
						component={component}
						isBorderBottom={false}
					/>
				))}
			</OrdersContainerMUI>
			{isVisibleAddress && (
				<AddressContainerMUI>
					<AddressRowMUI>
						<AddressTextMUI>
							{packageData.address?.name}
						</AddressTextMUI>
						<AddressTextMUI>
							{packageData.address?.surname}
						</AddressTextMUI>
						<AddressTextMUI>
							{packageData.address?.phone}
						</AddressTextMUI>
					</AddressRowMUI>
					<AddressTextMUI>
						{packageData.address?.address_string}
					</AddressTextMUI>
				</AddressContainerMUI>
			)}
			{isChangeStatus && (
				<OrderStatusModal
					successCallback={handleAddTrackNumber}
					orderItem={orderItem}
					open={isChangeStatus}
					onClose={handleAddTrackNumber}
					component={'stock2'}
					packageChange={true}
				/>
			)}
			{isDeletePackageModal && (
				<ModalConfirmUI
					open={isDeletePackageModal}
					title='Вы точно хотите удалить посылку?'
					onClickYes={handleDeletePackage}
					onClickNo={handleToggleDeleteModal}
					buttonNoText='Нет'
				/>
			)}
			{isDeleteTrackNumberModal && (
				<ModalConfirmUI
					open={isDeleteTrackNumberModal}
					title='Вы точно хотите удалить трек номер с этой посылки?'
					onClickYes={handleDeleteTrackNumber}
					onClickNo={handleToggleDeleteTrackNumberModal}
					buttonNoText='Нет'
				/>
			)}
		</ContainerMUI>
	);
};

const {
	TextMUI,
	TitleMUI,
	TitleTextMUI,
	ContainerMUI,
	StatusTextMUI,
	TrackNumberMUI,
	AddressTextMUI,
	OrdersContainerMUI,
	AddressContainerMUI,
	TrackNumberLinkMUI,
	TrackNumberLinkTextMUI,
	TrackNumberContainerMUI,
	TrackNumberIconMUI,
	AddressRowMUI,
} = usePackageItemStyles();


export default React.memo(PackageItem);
