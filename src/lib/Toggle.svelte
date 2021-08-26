<script>
    export let color= true;
</script>
{#if color}
    <label class="switch relative inline-block w-16 h-9">
        <input type="checkbox" class="opacity-0 w-0 h-0">
        <span 
        class="slider absolute cursor-pointer rounded-3xl inset-0 px-8 py-2
        before:bg-gray-100 before:rounded-full dark:before:bg-gray-800
        before:transition before:absolute before:place-content-start
        before:h-6 before:w-6 before:left-1 before:bottom-1.5"
        class:bg-green-400={color=="primary"} 
        class:bg-yellow-400={color=="warning"}
        class:bg-indigo-800={color=="pop"}
        class:bg-blue-400={color=="info"}
        class:bg-red-400={color=="danger"}
        ></span>
    </label>
{/if}
<style>
input:checked + .slider:before {
  transform: translateX(2.05rem);
}
</style>