<script>
    // components
    import Navbar from '../lib/components/Navbar.svelte'
    import Footer from '../lib/components/Footer.svelte'
    
    // scripts

</script>

<!-- <Navbar />
<slot/>
<Footer /> -->

<div id="main">
    <div id="nav">
        <Navbar />
    </div>
    <div id="content" class="mx-3">
        <slot/>
    </div>
    <div id="footer">
        <Footer />
    </div>
</div>

<style>

#main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    #nav, #footer {
        /* background-color: red; */
    }

    #content {
        flex-grow: 1;
        overflow: auto;
        /* margin: 0 auto; */
        /* padding-inline: 5vw; */
    }

</style>