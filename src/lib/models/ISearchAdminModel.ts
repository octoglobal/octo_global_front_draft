export interface IOrdersSearchAdmin {
	comment: string;
	id: number;
	longId: number;
	statusId: number;
	title: string;
	trackNumber: string;
	userAreaId: number;
	userEmail: string;
	userId: number;
	userName: string;
	userStatusId: number;
	userSurname: string;
};

export interface IUserSearchAdmin {
	email: string;
	id: number;
	name: string;
	personalAreaId: number;
	statusId: number;
	surname: string;
}

export interface ISearchAdminModel {
	orders_numbers: IOrdersSearchAdmin;
	orders_track_numbers: IOrdersSearchAdmin;
	users_emails: IUserSearchAdmin;
	users_numbers: IUserSearchAdmin;
}

export interface ISearchAdminModelData {
	search_results: ISearchAdminModel;
}

