<template>
	<div class="select-input">
		<div class="select-input__wrap" :class="{ 'active': isShow }">
			<div class="select-input__value" @click="isShow = !isShow">
				<span class="placeholder" v-if="!selected">{{ placeholder }}</span>
				<span v-else>{{ selected }}</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="select-input__icon" :class="{ 'active': isShow }">
					<path d="M4.59375 8.90907L11.1459 16.5553C11.2516 16.6785 11.3826 16.7774 11.53 16.8452C11.6774 16.913 11.8377 16.9481 12 16.9481C12.1623 16.9481 12.3226 16.913 12.47 16.8452C12.6174 16.7774 12.7485 16.6785 12.8541 16.5553L19.4063 8.90907C20.0316 8.17922 19.5131 7.05188 18.5522 7.05188H5.44594C4.485 7.05188 3.96657 8.17922 4.59375 8.90907Z"/>
				</svg>
			</div>
			<div class="select-input__drop" v-if="isShow">
				<ul>
					<li v-for="(option, i) of options" :key="i" @click="changeOption(option)">{{ option.title }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SelectInput',
		props: {
			placeholder: { type: String, default: '' },
			options: Array
		},
		data: () => ({
			isShow: false,
			selected: null
		}),
		methods: {
			changeOption(option) {
				this.selected = option.title
				this.isShow = false
				this.$emit('change', option.code)
			}
		}
	}
</script>

<style lang="scss">
	.select-input {
		width: 100%;
		font-size: 0.9em;
		&__wrap {
			position: relative;
			border: 1px solid $grey-light;
			cursor: pointer;
			&.active {
				border: 1px solid $primary;
			}
		}
		&__value {
			padding: 15px 20px;
			.placeholder {
				color: $grey-dark;
			}
		}
		&__drop {
			ul {
				li {
					padding: 15px 20px;
					&:hover {
						background: $primary-light;
					}
				}
			}
		}
		&__icon {
			position: absolute;
			right: 10px;
			top: 12px;
			fill: $grey-light;
			transition: all ease .2s;
			&:hover {
				fill: $secondary-dark;
			}
			&.active {
				transform: rotate(90deg)
			}
		}
	}
</style>