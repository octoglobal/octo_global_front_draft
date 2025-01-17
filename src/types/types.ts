import {IAddressModel} from '@/models/IAddressModel';

export interface IOrderInfo {
	id: number,
	statusId: number,
	trackNumber: string,
	tracking_link: string,
	longId: number,
	title: string,
	comment: string,
}

export interface IOrderCardStyles {
	highlight?: boolean,
	disabled?: boolean,
}

export interface IOrderCard extends IOrderInfo, IOrderCardStyles {}

export type AddressFetchObject = Omit<IAddressModel, 'id'>;

export interface IRecoveryMessage {
	email: string
}

export interface IUpdatePassword {
	old_password: string,
	new_password: string,
}

export interface IAddOrder {
	title: string,
	track_number: string,
	comment?: string
}

export interface IDeleteOrder {
	orderId: number,
}

export interface IRepeatPasswordForm {
	token: string,
}

export interface ISendRecoveryPass extends IRepeatPasswordForm{
	password: string
}

export interface IRepeatPasswordFormError {
	password: string
	repeatPassword: string
}

export interface IAccountUpdateUser {
	email: string,
	phone: string,
	name?: string;
	surname?: string;
}

export type IUpdatePhone = Omit<IAccountUpdateUser, 'email'>;

interface IHeaderNavItem {
	title: string,
	showAuth: boolean,
	showAdmin?: boolean,
	href: string,
}

export interface IHeaderNavItemsData {
	desktop: IHeaderNavItem[],
	mobile: IHeaderNavItem[]
	tablet: IHeaderNavItem[]
}

export interface IReviewAdd {
	name: string,
	time: string,
	comment: string
}

export interface IReviewItem {
	text: string,
	userName: string,
	createdTime: string,
	id: number,
}

export interface IReviewAddSubmit {
	text: string
}

export interface IReviewAddSubmitMobile {
	text: string,
	userName: string,
	userId: number;
}

export interface IReview extends IReviewAdd{
	id: number,
}

export type TAddReview = {
	text: string;
}

export interface IDefaultFetchSuccess {
	message: 'success'
}
