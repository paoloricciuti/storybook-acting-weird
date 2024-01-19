<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	export const meta: Meta = {
		title: 'YetAnother',
		id: 'YetAnother'
	};
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import { onDestroy, onMount } from 'svelte';
	import Button from './Button.svelte';

	onMount(() => {
		console.log('YetAnother mounted');
		return () => {
			console.log('YetAnother unmounted from mount');
		};
	});

	onDestroy(() => {
		console.log('YetAnother destroyed');
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
