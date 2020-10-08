<template>
	<div class="card">
		<div class="card__photo">
			<img src="@/assets/img/1.jpg" alt="Luke Skywalker">
		</div>
		<h3>Luke Skywalker</h3>
		<hr>
		<ul>
			<li>
				<span class="title">Рост: </span>
				<span>172cm</span>
			</li>
			<li>
				<span class="title">Вес: </span>
				<span>77 kg</span>
			</li>
			<li>
				<span class="title">Пол: </span>
				<span>male</span>
			</li>
			<li>
				<span class="title">Родная планета: </span>
				<span>Tatooine</span>
			</li>
			<li>
				<span class="title">Дата рождения: </span>
				<span>19BBY</span>
			</li>
		</ul>
		<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button-like">
			<path d="M18.6789 1.6875C14.875 1.6875 13 5.4375 13 5.4375C13 5.4375 11.125 1.6875 7.3211 1.6875C4.22969 1.6875 1.78164 4.27383 1.75 7.35996C1.68555 13.766 6.83184 18.3217 12.4727 22.1502C12.6282 22.256 12.8119 22.3126 13 22.3126C13.1881 22.3126 13.3718 22.256 13.5273 22.1502C19.1676 18.3217 24.3139 13.766 24.25 7.35996C24.2184 4.27383 21.7703 1.6875 18.6789 1.6875V1.6875Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>

	</div>
</template>

<script>
	export default {
		name: 'Card'
	}
</script>

<style lang="scss">
	.card {
		padding: 30px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 1px solid $grey-light;
		&__photo {
			height: 110px;
			width: 110px;
			border: 2px solid $secondary;
			border-radius: 50%;
			overflow: hidden;
			img {
				max-width: 100%;
			}
		}
		h3 {
			margin: 10px 0;
			color: $secondary-dark;
		}
		hr {
			height: 1px;
			width: 80px;
			border: none;
			background: $grey-light;
		}
		ul {
			margin-top: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			li {
				margin: 3px 0;
				.title {
					color: $grey-dark;
				}
			}
		}
		.button-like {
			margin-top: 15px;
			stroke: $grey;
			cursor: pointer;
			&:hover {
				stroke: $red;
				fill: $red;
			}
		}
	}
</style>