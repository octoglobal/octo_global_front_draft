import {octoAxios} from '@/lib/http';

export interface IUserRegistrationReq {
	name: string;
	email: string;
	surname: string;
	password: string;
}

export const fetchUserRegistration = async (data: IUserRegistrationReq) => {
	return (
		await octoAxios.post('/registration', data)
			.then(r => r.data.message)
			.catch(e => e.response)
	);
};
