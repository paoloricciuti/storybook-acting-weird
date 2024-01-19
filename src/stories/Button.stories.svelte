<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	export const meta: Meta = {
		title: 'Button',
		id: 'Button'
	};
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import { onDestroy, onMount } from 'svelte';
	import Button from './Button.svelte';

	onMount(() => {
		console.log('Button mounted');
		return () => {
			console.log('Button unmounted from mount');
		};
	});

	onDestroy(() => {
		console.log('Button destroyed');
	});
</script>

<Story
	name="Btn"
	play={() => {
		console.log('play');
	}}
>
	<Button label="Hey" />
</Story>
