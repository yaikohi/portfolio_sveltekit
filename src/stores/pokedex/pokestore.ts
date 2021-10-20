import { writable } from 'svelte/store';
import axios, { AxiosResponse } from 'axios';
import type { PokeApiResponse } from 'src/types/pokedex/pokeapi';


export const Pokemon = writable([]);


const fetchPokemon = async (): Promise<void> => {
	const URL = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	try {
		const response: AxiosResponse<PokeApiResponse, any> = await axios.get(URL);
		const loadedPokemon = response.data.results.map((data, index) => {
			return {
				name: data.name,
				id: index,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
			};
		});
		Pokemon.set(loadedPokemon);
	} catch (err) {
		console.error(err);
	}
};

fetchPokemon();


export default fetchPokemon;
