<template>
	<main class="home-page">
		<Header />
		<section class="main">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-8">
						<h1>А кто ты из вселенной Star Wars?</h1>
						<ArticleText>Создай свою уникальную коллекцию, состоящую из любимых персонажей вселенной Star Wars. Более 90 различных персонажей.</ArticleText>
					</div>
				</div>
			</div>
		</section>
		<section class="persons">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Персонажи вселенной Star Wars</h2>
						<CardList :persons="persons" :pagination="pagination" @change="changePage" />
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default {
		name: 'Home',
		data: () => ({
			persons: [],
			pagination: {
				count: 0,
				pageItemsCount: 10
			}
		}),
		mounted() {
			const url = 'http://swapi.dev/api/people/'
			this.$store.dispatch('FETCH_PERSONS', { url })
				.then(resp => {
					this.persons = resp.results
					this.pagination.count = resp.count
				})
				.catch(() => {})
		},
		methods: {
			changePage(currentPage) { 
				const url = `http://swapi.dev/api/people/?page=${currentPage}`
				this.$store.dispatch('FETCH_PERSONS', { url })
					.then(resp => {
						this.persons = resp.results
					})
					.catch(() => {})
			}
		},
		components: {
			Header: () => import('@/components/main/Header'),
			CardList: () => import('@/components/main/CardList'),
			ArticleText: () => import('@/components/items/ArticleText')
		}
	}
</script>

<style lang="scss">
	.home-page {
		position: relative;
		.main {
			position: relative;
			height: 100vh;
			max-width: 100vw;
			display: flex;
			align-items: center;
			background: $secondary;
			h1 {
				margin-bottom: 15px;
				color: #fff;
			}
			&__bg {
				img {
					position: absolute;
					right: 5%;
					bottom: 0;
					width: 45%;
				}
			}
		}
		.persons {
			padding: 50px 0;
			h2 {
				margin-bottom: 30px;
				color: $secondary-dark;
			}
		}
	}
</style>
