<script>
    export let color;
    export let value;
</script>
{#if color}
    <textarea bind:value={value} class="textarea text border text-bold
    appearance-none rounded
    m-2 px-3 py-3 pt-1 pb-1 bg-gray-100 dark:bg-gray-900"
    class:border-green-500={color=="primary"} class:text-green-500={color=="primary"}
    class:border-yellow-500={color=="warning"} class:text-yellow-500={color=="warning"}
    class:border-red-500={color=="danger"}  class:text-red-500={color=="danger"}
    class:border-blue-500={color=="info"} class:text-blue-500={color=="info"}
    class:border-indigo-500={color=="pop"} class:text-indigo-500={color=="pop"}
    />
{/if}
  