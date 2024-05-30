<script>
	import Sidebar from "./sidebar.svelte";

</script>

<div id="parent">

    <Sidebar />

    <div id="content" class="my-3">

    </div>

</div>


<style>

    #parent {
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        flex: 1;
        /* max-height: 70vh; */
        /* background-color: red; */
        /* outline: 1px solid red; */
    }

    #content {
        flex: 1;
        background-color: blue;
        /* outline: 1px solid blue; */
    }


</style>