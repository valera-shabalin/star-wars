<template>
	<div class="card-list">
		<div class="card-list__filter">
			<TextInput v-model.trim="searchName" :placeholder="'Введите имя персонажа'" />
			<SelectInput :placeholder="'Выберите пол'" :options="['Мужской', 'Женский']" @change="changeGender" />
		</div>
		<div class="card-list__list">
			<div class="row">
				<div v-for="(person, index) of filteredList" class="col-12 col-sm-6" :key="index">
					<Card :person="person" :index="index" />
				</div>
			</div>
		</div>
		<div class="card-list__pagination">
			<Pagination @change="changePage" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardList',
		props: {
			persons: { type: Array, default: null }
		},
		data: () => ({
			searchName: '',
			gender: ''
		}),
		computed: {
			filteredList() {
				return this.persons.filter(item => {
					const name = item.name.toLocaleLowerCase()
					return name.includes(this.searchName)
				})
			}
		},
		methods: {
			changeGender(option) { this.gender = option },
			changePage(currentPage) { this.$emit('change', currentPage) }
		},
		components: {
			Card: () => import('@/components/main/Card'),
			Pagination: () => import('@/components/main/Pagination')
		}
	}
</script>

<style lang="scss">
	.card-list {
		&__filter {
			display: flex;
			.text-input {
				margin-right: 30px;
				flex-basis: 320px;
				flex-grow: 1;
			}
			.select-input {
				flex-basis: 320px;
				flex-grow: 1;
			}
		}
		&__list {
			margin-top: 20px;
		}
		&__pagination {
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