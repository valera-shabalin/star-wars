<template>
	<div class="text-input">
		<input type="text" :content="content" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
	</div>
</template>

<script>
	export default {
		name: 'TextInput',
		props: {
			content: { type: String, default: '' },
			placeholder: { type: String, default: '' }
		},
		model: {
			prop: 'content',
			event: 'input'
		},
	}
</script>

<style lang="scss">
	.text-input {
		input {
			padding: 15px 20px;
			width: 100%;
			font-family: $u-regular;
			font-size: 0.9em;
			border: 1px solid $grey-light;
			outline: none;
			transition: all ease .2s;
			&:focus {
				border: 1px solid $primary;
			}
			&::placeholder {
				color: $grey-dark;
			}
		}
	}
</style>