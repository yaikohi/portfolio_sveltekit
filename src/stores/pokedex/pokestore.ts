import { writable } from 'svelte/store';
import axios, { AxiosResponse } from 'axios';
import type { PokeApiResponse } from 'src/types/pokedex/pokeapi';

export const Pokemon = writable([]);
let loaded = false;
// eslint-disable-next-line prefer-const
let amount: number = 0;
const pokemonDetails = {};

export const fetchPokemon = async (): Promise<void> => {
	if (loaded) return;

	const URL = `https://pokeapi.co/api/v2/pokemon?limit=${amount ? amount : 150}`;
	try {
		const response: AxiosResponse<PokeApiResponse, any> = await axios.get(URL);
		const loadedPokemon = response.data.results.map((data, index) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		Pokemon.set(loadedPokemon);
		loaded = true;
	} catch (err) {
		console.error(err);
	}
};

export const getPokemonById = async (id: number) => {
	try {
		const URL = `https:pokeapi.co/api/v2/pokemon/${id}`;
		// const URL = `https://pokeapi.co/api/v2/pokemon/`;
		const response = await axios.get(URL);
		const data = await response.data;
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.log(err);
		return null;
	}
};
