<template>
	<a :href="link" class="button" :class="mode" @click.prevent="$emit('click')">
		<span><slot></slot></span>
	</a>
</template>

<script>
	export default {
		name: 'DefaultButton',
		props: {
			link: { type: String, default: '#' },
			mode: { type: String, default: '' }
		}
	}
</script>

<style lang="scss">
	.button {
		position: relative;
		padding: 15px 35px;
		text-decoration: none;
		transition: color ease .2s .3s;
		cursor: pointer;
		span {
			position: relative;
		}
		&:before {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			transform-origin: bottom;
			transform: scaleY(0);
			transition: transform ease-in .4s;
		}
		&:hover  {
			&:before {
				transform: scaleY(1);
			}
		}
		&.disable {
			color: $grey;
			&:hover {
				border: 1px solid $grey-light;
				color: $grey;
			}
			&:before {
				display: none;
			}
		}
		&.active {
			color: $secondary;
			border: 1px solid $primary;
			&:before {
				transform: scaleY(1);
			}
		}
	}
	.white {
		border: 1px solid #fff;
		color: #fff;
		&:hover {
			color: $secondary-dark;
		}
		&:before {
			background: #fff;
		}
	}
	.grey {
		border: 1px solid $grey-light;
		color: $grey-dark;
		&:hover {
			color: $secondary-dark;
			border: 1px solid $primary;
		}
		&:before {
			background: $primary;
		}
	}
</style>