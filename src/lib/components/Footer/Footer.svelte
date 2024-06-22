<script>
	import { footerProps } from "./Footer";
    import svelteLogo from "$lib/images/svelte-logo.svg"
</script>
<footer class="d-flex flex-wrap justify-content-between align-items-center bg-body-tertiary py-3 px-5 border-top">
	<div class="col-md-4 d-flex align-items-center">
        <span class="mb-3 mb-md-0 text-body-secondary">
            <b class="kanit-bold">FILONZI</b>
            •
            <span>Made using <a href="https://svelte.dev/" target="_blank">Svelte</a> <img src={svelteLogo} alt="Svelte logo" height="20px"> </span>
        </span>
	</div>

	<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        {#each footerProps as footerItem}
            <li class="ms-3">
                <a class="text-body-secondary {footerItem.disabled ? 'disabled' : ''}" href={footerItem.link} target="_blank">
                    <i class="{footerItem.icon}"></i>
                </a>
            </li>
        {/each}
	</ul>
</footer>
