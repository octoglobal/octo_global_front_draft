import {IAddressModel} from '@/models/IAddressModel';

export interface IUserModel {
	readonly email: string;
	readonly id: number;
	readonly addresses: IAddressModel[];
	readonly personalAreaId: number;
	readonly statusId: number;
	readonly lastLoginTime: string;
	readonly name: string;
	readonly photo: string;
	readonly phone: string;
	readonly registrationTime: string
	readonly surname: string;
	readonly username: string;
	readonly verifiedEmail: boolean;
	readonly balance: number;
}
