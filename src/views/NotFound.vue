<template>
	<main class="not-found-page">
		<Header />
		<div class="container">
			<div class="row">
				<div class="col-12 d-flex flex-column align-items-center">
					<span class="status">404</span>
					<div class="light-line"></div>
					<h1>Страница не найдена!</h1>
					<DefaultButton :mode="'white'" @click="$router.go(-1)">Вернуться назад</DefaultButton>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		name: 'NotFound',
		components: {
			Header: () => import('@/components/main/Header')
		}
	}
</script>

<style lang="scss">
	.not-found-page {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $secondary;
		h1 {
			margin-bottom: 25px;
			text-align: center;
			color: #fff;
		}
		.status {
			font-family: $u-bold;
			font-size: 7em;
			color: #fff;
		}
		.light-line {
			margin: 15px 0;
		}
	}
</style>