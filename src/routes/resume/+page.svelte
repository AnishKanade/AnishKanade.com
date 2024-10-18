<script>
	// Update the path to where the resume PDF is stored in your project
	export const data = 'src/routes/resume/Public/Resume.pdf'; // Adjust if necessary
	export const title = 'Resumé';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} target="_blank">
				<Chip size={'1.25em'}>View Resumé</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
