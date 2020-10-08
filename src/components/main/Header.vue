<template>
	<header class="header">
		<div class="header__logo">
			<img src="@/assets/img/logo.png" alt="star wars">
		</div>
		<nav class="header__menu">
			<router-link to="/" exact active-class="active">Главная</router-link>
			<router-link to="/favorites" active-class="active">Любимые герои</router-link>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 0 70px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: $secondary;
		z-index: 20;
		&__logo {
			img {
				height: 90px;
			}
		}
		&__menu {
			a {
				position: relative;
				margin-left: 50px;
				font-family: $u-medium;
				text-decoration: none;
				color: #fff;
				&:before {
					content: '';
					position: absolute;
					bottom: -16px;
					left: 50%;
					height: 5px;
					width: 85px;
					border-radius: 0px 0px 3px 3px;
					background: #fff;
					box-shadow: 0px 0px 15px 5px #57AAF7;
					transform: translateX(-50%) scaleX(0);
				}
				&.active:before {
					transform: translateX(-50%) scaleX(1);
				}
			}
		}
	}
	@media (max-width: 767px) {
		.header {
			padding: 0 15px;
		}
	}
</style>