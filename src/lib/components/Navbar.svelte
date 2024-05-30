<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	let navHeight;
	let navElement: HTMLElement;
	let divElement: HTMLElement;

	onMount(() => {
        navHeight = getComputedStyle(navElement).height;
        divElement.style.height = navHeight;
    });
</script>



<nav bind:this={navElement} class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand kanit-regular" href="/">Filonzi</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="navbar-nav">
				<a class="nav-link {$page.url.pathname === "/" ? "active" : null}" aria-current="page" href="/">About</a>
				<a class="nav-link {$page.url.pathname === "/skills" ? "active" : null}" href="/skills">Skills</a>
				<a class="nav-link {$page.url.pathname === "/scuola" ? "active" : null}" href="/scuola">Scuola</a>
				<a class="nav-link disabled" aria-disabled="true" href="/contatti">Contatti</a>
			</div>
		</div>
	</div>
</nav>

<div bind:this={divElement} />
