<script>
	import './Navbar.ts';
	import { navProps } from './Navbar';
	import { page } from '$app/stores';
</script>

<nav class="border-bottom navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand kanit-bold" href="/">Filonzi</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				{#each navProps as navItem}
					<li class="nav-item">
						<a
							class="nav-link
                     {navItem.disabled ? 'disabled' : ''}
                     {navItem.exact && $page.url.pathname === navItem.link ? 'active' : ''}
                     {!navItem.exact && $page.url.pathname.startsWith(navItem.link)
								? 'active'
								: ''}"
							aria-current="page"
							href={navItem.link}>{navItem.title}</a
						>
					</li>
				{/each}
			</ul>
			<ul class="navbar-nav ms-auto">

			</ul>
		</div>
	</div>
</nav>
