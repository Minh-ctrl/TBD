<script>
    export let input;
    export let color;
    export let content;
    export let value;
    export let name;
</script>
{#if color}
    <div class="flex items-center m-2">
        <input bind:group={input} {value} {name}
                type="radio" 
                class="w-4 transition h-4 border border-solid border-gray-900 
                dark:border-gray-200 appearance-none rounded-full" 
                class:checked:bg-red-400={color=="danger"}
                class:checked:bg-green-400={color=="primary"}
                class:checked:bg-purple-800={color=="pop"}
                class:checked:bg-blue-400={color=="info"}
                class:checked:bg-yellow-400={color=="warning"}/>
        <label for="input"class="pl-4 cursor-pointer text-xl">
            {content}
        </label>
   </div>
{/if}
