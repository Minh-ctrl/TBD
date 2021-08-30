<script>
    export let progress;
    export let color;
</script>
{#if color}
<div class="relative pt-1 h-20 w-40">
    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-400">
        <div style="width:{progress}%"
            class="shadow-none transition-all duration-1000 flex flex-col text-center whitespace-nowrap justify-cente"
            class:bg-green-400={color=="primary"} 
            class:bg-yellow-400={color=="warning"}
            class:bg-indigo-800={color=="pop"}
            class:bg-blue-400={color=="info"}
            class:bg-red-400={color=="danger"}
        >
        </div>
    </div>
  </div>
{/if}
