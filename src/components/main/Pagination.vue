<template>
	<div class="pagination">
		<DefaultButton :mode="'grey'" :class="{ 'disable': currentPage == 1 }" @click="nextPage">Предыдущая</DefaultButton>
		<div class="pagination__list">
			<DefaultButton 
				:mode="'grey'" 
				v-for="index of countPage" 
				:key="index" 
				:class="{ 'active': currentPage == index }"
				@click="changePage(index)">{{ index }}</DefaultButton>
		</div>
		<DefaultButton 
			:mode="'grey'" 
			:class="{ 'disable': currentPage == countPage }" 
			@click="preventPage">Следующая</DefaultButton>
	</div>
</template>

<script>
	export default {
		name: 'Pagination',
		data: () => ({
			currentPage: 1,
			count: 0
		}),
		mounted() {
			this.count = this.$store.getters.COUNT
		},
		computed: {
			countPage: function() {
				return Math.ceil(this.count / 10)
			}
		},
		methods: {
			nextPage() {
				if (this.currentPage == 1) return 
				this.currentPage--
				this.$emit('change', this.currentPage)
			},
			preventPage() {
				if (this.currentPage == this.countPage) return 
				this.currentPage++
				this.$emit('change', this.currentPage)
			},
			changePage(index) {
				this.currentPage = index
				this.$emit('change', this.currentPage)
			}
		}
	}
</script>

<style lang="scss">
	.pagination {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__list {
			.button {
				margin: 0 10px;
			}
		}
	}
</style>