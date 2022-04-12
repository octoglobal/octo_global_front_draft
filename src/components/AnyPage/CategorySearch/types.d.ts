export interface IHints {
	title: string;
	url: string;
}

export interface IHintsResponse {
	search_suggestions_results: IHints[]
}
