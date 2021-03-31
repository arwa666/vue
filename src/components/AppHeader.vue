<template>
  <div class="home-header">
	<nav class="navbar navbar-expand-sm fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#">
				<img src='img/home/logo.svg' alt="logo">
			</a>


			<div class=" navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-md-auto">
					<li class="nav-item active">
						<a class="nav-link text-uppercase" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-uppercase" href="#"> Track </a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-uppercase" href="#"> العربية</a>
					</li>
				</ul>
			</div>
		</div>
	</nav> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
