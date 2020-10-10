<template>
	<div class="card-list">
		<div class="card-list__filter">
			<TextInput v-model.trim="searchName" :placeholder="'Введите имя персонажа'" />
			<SelectInput :placeholder="'Выберите пол'" :options="genders" @change="changeGender" />
		</div>
		<div class="card-list__list">
			<div class="row" v-if="filteredList.length > 0">
				<div v-for="(person, index) of filteredList" class="col-12 col-sm-6" :key="index">
					<Card :person="person" :index="index" />
				</div>
			</div>
			<div class="row" v-else>
				<div class="col-12">
					<h3>Нет персонажей</h3>
				</div>
			</div>
		</div>
		<div class="card-list__pagination" v-if="pagination.count > 10">
			<Pagination :options="pagination" @change="changePage" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardList',
		props: {
			persons: { type: Array, default: [] },
			pagination: Object
		},
		data: () => ({
			searchName: '',
			selectGender: 'none',
			genders: [
				{ code: 'male', title: 'Мужской' },
				{ code: 'female', title: 'Женский' },
				{ code: 'n/a', title: 'Нет пола' },
				{ code: 'none', title: 'Не выбрано' }
			]
		}),
		computed: {
			filteredList() {
				return this.persons.filter(item => {
					let flag = true
					if (this.selectGender!= 'none' && item.gender != this.selectGender) flag = false
					if (!item.name.toLocaleLowerCase().includes(this.searchName)) flag = false
					return flag
				})
			}
		},
		methods: {
			changeGender(option) { this.selectGender = option },
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