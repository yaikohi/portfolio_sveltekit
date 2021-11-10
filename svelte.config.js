import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'@': path.resolve('./src'),
					'@lib': path.resolve('./src/lib'),
					'@routes': path.resolve('./src/routes'),
					'@components': path.resolve('./src/lib/components'),
					'@utils': path.resolve('./src/lib/utils')
				}
			}
		}
	}
};

export default config;
