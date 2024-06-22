<script lang="ts">
    import jslogo from "$lib/images/logos/Javascript.png"
    import pylogo from "$lib/images/logos/Python.png"

    import {LanguageSkills, FrameworkSkills, HypervisorSkills, SkillLevel, SkillMerge, type skillItem} from "./skills";
    const logos = import.meta.glob("$lib/images/logos/*.png", {eager: true});
    const levels = import.meta.glob("$lib/images/assets/level/*.png", {eager: true});

    // @ts-ignore
    const skillImages: {[key: string]: string} = MapImages(logos)
    const levelImages: {[key: string]: string} = MapImages(levels)


    import { writable } from 'svelte/store';
    
    const modalSubject = writable(LanguageSkills[0]);
    var invokeModalButton: HTMLElement;


    function MapImages(collezione: {[key: string]: any}): {[key: string]: string} {
        return Object.entries(collezione).reduce((acc, [path, module]) => {
            const name = path.split('/').pop()?.split('.')[0] ?? ''; // Estrae il nome del file senza estensione
            // @ts-ignore
            acc[name] = module.default; // Associa il percorso dell'immagine al nome della skill
            return acc;
        }, {});
    }

    function switchModalSubject(skill: skillItem) {
        modalSubject.set(skill);
        invokeModalButton.click();
    }

</script>

<svelte:head>
	<title>Skills</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="text-center kanit-black">Skills developed over the years</h1>

    {#each SkillMerge as MergeItem}

    <h3 class="mt-5"><b> <i> {MergeItem.title} </i> </b></h3>
	<hr>

    <div class="row">
        
        {#each MergeItem.skills as skill}
        
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 skillCard" on:click={() => {
            switchModalSubject(skill)
        }}>
            <div class="bg-white rounded-1 p-2 inner" >
                <div class="d-flex align-items-center">
                    <img src={skillImages[skill.image]} class="img-fluid" style="width: 50px; height: 50px; object-fit: cover;" alt="...">
                    <div class="ms-3">
                        <h5 class="card-title"><b>{skill.name}</b></h5>
                        <div class="d-flex align-items-center">
                            <span style="font-size: 0.80rem; margin-left: 5px;"><i>{SkillLevel[skill.level]}</i></span>
                            <img src={levelImages[SkillLevel[skill.level]]} width="15px" height="15px" class="ms-2 mt-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/each}

    </div>

    {/each}


    <!-- Button trigger modal -->
    <button bind:this={invokeModalButton} type="button" style="display: none;" class="btn btn-primary visually-hidden" data-bs-toggle="modal" data-bs-target="#descriptionModal">
        Launch demo modal
    </button>
    
  <!-- Modal -->
    <div class="modal fade mt-5" id="descriptionModal" tabindex="-1" aria-labelledby="descriptionModal" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <img src={skillImages[$modalSubject.image]} width="35px" alt="modal_logo">
                <h1 class="modal-title fs-5 ms-3" id="exampleModalLabel"><b>{$modalSubject.name}</b></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p style="text-align: justify;">
                    {$modalSubject.description || "Nothing there to see :/"}
                </p>
            </div>
        </div>
        </div>
    </div>
    

</div>



<style>

    .skillCard {
        transition: 200ms;
    }

    .skillCard:hover {
        transform: scale(1.15);
        cursor: pointer;
    }

    .skillCard > .inner {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
</style>