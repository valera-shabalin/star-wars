<template>
	<div class="card-list">
		<div class="card-list__filter">
			<TextInput v-model.trim="searchName" :placeholder="'Введите имя персонажа'" />
			<SelectInput :placeholder="'Выберите пол'" :options="['Мужской', 'Женский']" @change="changeGender" />
		</div>
		<div class="card-list__list">
			<div class="row">
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<Card />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardList',
		data: () => ({
			searchName: '',
			gender: ''
		}),
		methods: {
			changeGender(option) { this.gender = option }
		},
		components: {
			Card: () => import('@/components/main/Card')
		}
	}
</script>

<style lang="scss">
	.card-list {
		&__filter {
			display: flex;
			.text-input {
				margin-right: 15px;
				flex-basis: 320px;
			}
			.select-input {
				flex-basis: 320px;
			}
		}
		&__list {
			margin-top: 20px;
		}
	}
	@media (max-width: 576px) {
		.card-list {
			&__filter {
				flex-direction: column;
				.text-input {
					margin-right: 0;
					margin-bottom: 15px;
					flex-basis: 0;
				}
				.select-input {
					flex-basis: 0;
				}
			}
		}
	}
</style>