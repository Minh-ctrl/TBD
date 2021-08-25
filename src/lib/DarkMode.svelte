<script>
    import {darkMode} from '$lib/dark'
    export function toggle(){
        $darkMode= ! $darkMode;
        window.document.body.classList.toggle('dark');
    }
</script>

<button class=" border border-xl transition 
                border-gray-900 dark:border-gray-100
                pt-2.5 pb-2.5 pl-5 pr-5 ml-4 mr-4 mb-2 mt-2"on:click={toggle}>
	{#if $darkMode==true }
		Light Mode
	{:else}
		Dark Mode
	{/if}
</button>
