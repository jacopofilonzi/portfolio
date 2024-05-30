<script>
    import { onMount } from "svelte";


    // CSS
    import "bootstrap/dist/css/bootstrap.min.css";
	import "bootstrap-icons/font/bootstrap-icons.css";
    import "$lib/styles/global/global.css";

    // Components
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";

    // After
    onMount(() => {

        // Bootstrap JS
			// @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.js");
        
    });

</script>

<div class="app">

    <Header />

    <main class="container">
		<slot />
	</main>

	<Footer />
</div>


<style>

    .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		/* max-height: 100vh; */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>