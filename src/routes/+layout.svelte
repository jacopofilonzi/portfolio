<script>
    import { onMount } from "svelte";


    // CSS
        // Bootstrap
    import "bootstrap/dist/css/bootstrap.min.css";
	import "bootstrap-icons/font/bootstrap-icons.css";
        // Custom
    import "$lib/Style/MainLayout.css";

    // Components
	import Header from "$lib/components/Header/Header.svelte";
	import Footer from "$lib/components/Footer/Footer.svelte";
    
    
    // After
    onMount(() => {

        // Bootstrap JS
			// @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle.js");
        
    });



</script>


<div id="app">
    
    <Header />
    
    <main class="container pt-5">
        <slot />
    </main>
    
    <Footer />

</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>