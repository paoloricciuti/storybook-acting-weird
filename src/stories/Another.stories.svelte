<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	export const meta: Meta = {
		title: 'Another',
		id: 'Another'
	};
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import { onDestroy, onMount } from 'svelte';
	import Button from './Button.svelte';

	onMount(() => {
		console.log('Another mounted');
		return () => {
			console.log('Another unmounted from mount');
		};
	});

	onDestroy(() => {
		console.log('Another destroyed');
	});
</script>

<Story
	name="Anth"
	play={() => {
		console.log('another play');
	}}
>
	<Button label="Hey" />
</Story>
