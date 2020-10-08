<template>
	<article class="article-text">
		<div class="line"></div>
		<p class="text"><slot></slot></p>
	</article>
</template>

<script>
	export default {
		name: 'ArticleText'
	}
</script>

<style lang="scss">
	.article-text {
		display: flex;
		align-items: center;
		color: #fff;
		.line {
			width: 5px;
			align-self: stretch;
			border-radius: 3px 0 0 3px;
			background: #fff;
			box-shadow: 0px 0px 15px 5px #57AAF7;
		}
		.text {
			padding: 8px 15px;
		}
	}
</style>