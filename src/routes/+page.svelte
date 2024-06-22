<script>
    import img_me from "$lib/images/me2.jpg"
</script>

<svelte:head>
    <title>Filonzi</title>
    <meta name="description" content="Landing page" />
</svelte:head>

<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
      <!-- <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg> -->
      <img src={img_me} alt="me" class="rounded-circle bi mt-4 mb-3" width="100" height="100">
      
      <h1 class="text-body-emphasis kanit-bold">Filonzi Jacopo</h1>
      <p class="col-lg-8 mx-auto fs-5 text-muted text-justiy">
        Mi presento, sono Jacopo Filonzi, nato nel 2005, abito a Jesi (AN) ed ho studiato informatica presso l'istituto IIS Marconi Pieralisi di Jesi
      </p>
    </div>
  </div>