<script>
    import Toggle from '$lib/Toggle.svelte';
    import Button from '$lib/Button.svelte';
    import TextArea from '$lib/TextArea.svelte';
    import DarkMode from '$lib/DarkMode.svelte';
    import RadioButton from '$lib/RadioButton.svelte';
    function myCustomFunction(e){
        let isSwitched = e.detail;
        console.log(isSwitched) // <--- What gets printed here you think ?
        }
</script>
<main class="h-screen bg-opacity-1">
    <div class="flex flex-row flex-wrap justify-center">
        <Button color="info" button_name="Information"/>
        <Button color="danger" button_name="Danger"/>
        <Button color="primary" button_name="Primary"/>
        <Button color="warning" button_name="Warning"/>
        <Button color="pop" button_name="Poppy"/>
    </div>
    <div class="flex flex-row flex-wrap justify-center">
        <TextArea color="info"/>
        <TextArea color="danger"/>
        <TextArea color="primary"/>
        <TextArea color="warning"/>
        <TextArea color="pop"/>
    </div>
    <div class="flex flex-row flex-wrap justify-around">
        <Toggle checked isSwitchOn={true} on:click={myCustomFunction} color="info"/>
        <Toggle checked color="danger"/>
        <Toggle color="primary"/>
        <Toggle color="warning"/>
        <Toggle color="pop"/>
    </div>
    <div class="flex flex-row flex-wrap justify-around">
        <RadioButton type="radio" color="info"/>
        <RadioButton type="radio" color="danger"/>
        <RadioButton type="radio" color="primary"/>
        <RadioButton type="radio" color="warning"/>
        <RadioButton type="radio" color="pop"/>
    </div>
    <DarkMode/>

</main>
<style>
	:root{
		--bg-color: rgba(243, 244, 246);
		--text-color: rgba(31, 41, 55);
	}
	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
	}
	
	:global(body.dark) {
		--bg-color: rgba(31, 41, 55);
		--text-color: rgba(243, 244, 246);
	}
</style>
