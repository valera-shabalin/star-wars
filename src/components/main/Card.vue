<template>
	<div class="card">
		<div class="card__photo">
			<img :src="`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`" :alt="person.name">
		</div>
		<h3>{{ person.name }}</h3>
		<hr>
		<ul>
			<li>
				<span class="title">Рост: </span>
				<span>{{ person.height }}</span>
			</li>
			<li>
				<span class="title">Вес: </span>
				<span>{{ person.mass }}</span>
			</li>
			<li>
				<span class="title">Пол: </span>
				<span>{{ person.gender }}</span>
			</li>
			<li>
				<span class="title">Родная планета: </span>
				<span v-if="planet.length > 0">{{ planet }}</span>
				<span v-else>-</span>
			</li>
			<li>
				<span class="title">Дата рождения: </span>
				<span>{{ person.birth_year }}</span>
			</li>
		</ul>
		<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button-like">
			<path d="M18.6789 1.6875C14.875 1.6875 13 5.4375 13 5.4375C13 5.4375 11.125 1.6875 7.3211 1.6875C4.22969 1.6875 1.78164 4.27383 1.75 7.35996C1.68555 13.766 6.83184 18.3217 12.4727 22.1502C12.6282 22.256 12.8119 22.3126 13 22.3126C13.1881 22.3126 13.3718 22.256 13.5273 22.1502C19.1676 18.3217 24.3139 13.766 24.25 7.35996C24.2184 4.27383 21.7703 1.6875 18.6789 1.6875V1.6875Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Card',
		data: () => ({
			planet: ''
		}),
		props: {
			person: Object,
			index: Number
		},
		mounted() {
			if (this.person.homeworld) {
				axios.get(this.person.homeworld)
				.then(resp => {
					this.planet = resp.data.name
				})
			}
		}
	}
</script>

<style lang="scss">
	.card {
		padding: 30px 15px;
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
			font-size: 14px;
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
		&:hover {
			border: 1px solid $primary;
			.card__photo {
				border: 2px solid $primary;
			}
		}
	}
</style>