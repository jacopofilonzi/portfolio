<script>
    import Head from './Head.svelte'

    function toggleDarkmode() {
        // document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'dark')
        document.getElementsByTagName("html")[0].setAttribute('data-bs-theme', 'dark')
    }

</script>
<Head />

<button>

</button>

<slot />