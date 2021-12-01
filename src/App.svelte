<script>
	import {onMount} from "svelte"

	export let appname
	let width = 0;

	//Import viewport views
	import view1 from "./views/view1.svelte"
	import Map from "./views/Map.svelte"

	//Set up viewport views
	let view = {
		"": Map,
		"#map": Map,
		"#v1": view1,
		"#test": null
	}
	let curView = "#map"

	//Update view with hash change
	function setViewFromHash() {
		curView = window.location.hash
	}

	//Mount initial settings
	onMount(()=> {
		//Set hash change event and initial hash view
		window.addEventListener('hashchange', setViewFromHash)
		setViewFromHash()
	})
</script>

<main>
	<nav style="max-width: {width}em" class='float box'>
		<a href="#map">Map</a>
		<a href="#v1">View 1</a>
		<a href="#test">Test</a>
	</nav>

	<svelte:component this={view[curView]}/>
</main>

<section id="controls">
	<section class="view-options"></section>
	<div class="view-btn">View options</div>

	<div class="floater">
		<button on:click={()=> width -= 5}>-</button>
		<button on:click={()=> width += 5}>+</button>
	</div>
</section>

<style lang='scss'>
	.floater {
		position: fixed;
		bottom: 2em;
		right: 2em;
		z-index: 10;
	}

	.view-btn {
		position: absolute;
		top: 1em; right: 1em;
		background: blue;
		color: white;
		padding: 2em;
	}
</style>