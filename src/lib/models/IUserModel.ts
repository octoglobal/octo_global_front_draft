export interface IUserModel {
	readonly id: number;
	readonly email: string;
	readonly name: string;
	readonly surname: string;
	readonly password: string;
	readonly salt: string;
	readonly photo: string;
	readonly username: string;
	readonly statusId: number;
	readonly registrationTime: Date;
	readonly lastLoginTime: Date;
	readonly deleteTime: Date;
}
