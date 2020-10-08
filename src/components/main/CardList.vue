<template>
	<div class="card-list">
		<div class="row">
			<div class="col-12">
				<div class="card-list__filter">
					<TextInput v-model.trim="searchName" :placeholder="'Введите имя персонажа'" />
					<SelectInput :placeholder="'Выберите пол'" :options="['Мужской', 'Женский']" @change="changeGender" />
				</div>
			</div>
			<div class="col-12">
				<div class="card-list__list">
			
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
			}
		}
	}
</style>