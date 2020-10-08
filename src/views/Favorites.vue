<template>
	<main class="favorites-page">
		<Header />
	</main>
</template>

<script>
	export default {
		name: 'Favorites',
		components: {
			Header: () => import('@/components/main/Header')
		}
	}
</script>

<style lang="scss">
	.favorites-page {
		position: relative;
	}
</style>