<template>
	<a :href="link" class="button button_white" @click.prevent="$emit('click')">
		<span><slot></slot></span>
	</a>
</template>

<script>
	export default {
		name: 'DefaultButton',
		props: {
			link: String
		}
	}
</script>

<style lang="scss">
	.button {
		position: relative;
		padding: 15px 35px;
		text-decoration: none;
		transition: color ease .2s .3s;
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
			color: $secondary;
			&:before {
				transform: scaleY(1);
			}
		}
	}

	.button_white {
		border: 1px solid #fff;
		color: #fff;
		&:before {
			background: #fff;
		}
	}
</style>