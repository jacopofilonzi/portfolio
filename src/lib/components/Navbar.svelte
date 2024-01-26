<script>
	import { onMount } from 'svelte';
	import { toggleDarkmode } from '../scripts/pageTheme.js';
	import { page } from '$app/stores';

	let path = '';
	$: path = $page.url.pathname;
</script>

<nav id="navbar" class="navbar navbar-expand-lg navbar-dark px-3 m-3">
	<a class="navbar-brand brand-title" href="#">Filonzi</a>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarNav"
		aria-controls="navbarNav"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item active">
				<a class="nav-link {path === '/' ? 'target' : ''}" href="/">Chi sono</a>
			</li>
			<li class="nav-item">
				<a
					class="nav-link {path === '/contatti' || path === '/contatti/' ? 'target' : ''}"
					href="/contatti/">Contattami</a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#" on:click={toggleDarkmode}>Switch theme</a>
			</li>
			<!-- <li class="nav-item">
					<a class="nav-link disabled" href="#">Disabled</a>
				</li> -->
		</ul>
	</div>
</nav>
<!-- <style> LIGHT MODE
		nav.navbar {
			background-color: var(--color-light-secondary);
			box-shadow: var(--shadow-basic);
			color: var(--color-light-text);
			border-radius: 8px;
		}

		nav.navbar a.navbar-brand {
			color: var(--color-light-text);
		}

		a.nav-link {
			color: rgba(0, 0, 0, 0.65);
		}
		a.nav-link:hover {
			color: rgba(0, 0, 0, 0.8);
		}

		a.nav-link.target {
			color: rgba(0, 0, 0, 0.8);
			text-decoration: underline;
		}
	</style> -->

<style>
	nav.navbar {
		background-color: var(--color-dark-secondary);
		box-shadow: var(--shadow-basic);
		color: var(--color-dark-text);
		border-radius: 8px;
	}
	/* nav.navbar a.navbar-brand {
			color: #fff;
		}

		a.nav-link {
			color: rgba(255, 255, 255, 0.65);
		}

		a.nav-link:hover {
			color: rgba(255, 255, 255, 0.75);
		} */

	a.nav-link.target {
		color: rgba(255, 255, 255, 0.75);
		text-decoration: underline;
	}
</style>
