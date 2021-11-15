export interface PokeApiResponse {
	count: number;
	next: string;
	previous: null | any;
	results: [{ name: string; url: string }];
}
