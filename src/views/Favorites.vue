<template>
	<main class="favorites-page">
		<Header />
		<section class="persons">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Ваши любимые персонажи</h2>
						<CardList :persons="filtredList" :pagination="pagination" @change="changePage" />
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
			persons: [],
			currentPage: 0,
			pagination: {
				count: 0,
				pageItemsCount: 10
			}
		}),
		mounted() {
			this.$store.commit('INIT_FAVORITES')
			this.persons = this.$store.getters.FAVORITES
			this.pagination.count = this.count
		},
		computed: {
			filtredList() {
				let list = []
				let i = this.currentPage * 10
				while(i < this.currentPage * 10 + this.pagination.pageItemsCount) {
					if (i == this.count) break
					list.push(this.persons[i])
					i++
				}
				return list
			},
			count() {
				return this.persons.length
			}
		},
		methods: {
			changePage(currentPage) {
				this.currentPage = --currentPage
			}
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
			margin-bottom: 50px;
			h2 {
				margin-bottom: 30px;
				color: $secondary-dark;
			}
		}
	}
</style>