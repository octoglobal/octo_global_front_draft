export interface IUserModel {
	readonly email: string;
	readonly id: number;
	readonly lastLoginTime: string;
	readonly name: string;
	readonly photo: string;
	readonly registrationTime: string
	readonly surname: string;
	readonly username: string;
	readonly verifiedEmail: boolean;
}
