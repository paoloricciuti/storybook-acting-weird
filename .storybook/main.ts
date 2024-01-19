import type { StorybookConfig } from '@storybook/sveltekit';
import { mergeConfig } from 'vite';
import inspect from 'vite-plugin-inspect';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	viteFinal(config) {
		return mergeConfig(config, {
			plugins: [inspect()]
		});
	}
};
export default config;
