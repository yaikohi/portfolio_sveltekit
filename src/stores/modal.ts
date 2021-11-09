// https://svelte.dev/repl/033e824fad0a4e34907666e7196caec4?version=3.44.0
import { writable } from 'svelte/store';

export const modal = writable(null);
export const windowStyle = writable({})