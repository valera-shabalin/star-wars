<template>
	<main class="favorites-page">
		<Header />
		<section class="persons">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Персонажи вселенной Star Wars</h2>
						<CardList :persons="persons" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: 'Favorites',
		data: () => ({
			persons: []
		}),
		created() {
			
		},
		components: {
			Header: () => import('@/components/main/Header'),
			CardList: () => import('@/components/main/CardList')
		}
	}
</script>

<style lang="scss">
	.favorites-page {
		position: relative;
		.persons {
			margin-top: 120px;
			h2 {
				margin-bottom: 30px;
				color: $secondary-dark;
			}
		}
	}
</style>