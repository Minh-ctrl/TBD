<script>
    export let color;
    export let button_name;
</script>
{#if color}
    <a class=" border  
    uppercase text-xl pt-2.5 pb-2.5 pl-5 pr-5 ml-4 mr-4 mb-2 mt-2
    duration-200
    hover:shadow-md hover:text-white" 
    class:hover:bg-blue-400={color=="info"} class:border-blue-300={color=="info"} class:text-blue-400={color=="info"} 
    class:hover:bg-red-400={color=="danger"} class:border-red-300={color=="danger"} class:text-red-400={color=="danger"}
    class:hover:bg-green-400={color=="primary"} class:border-green-300={color=="primary"} class:text-green-400={color=="primary"}
    class:hover:bg-yellow-400={color=="warning"} class:border-yellow-300={color=="warning"} class:text-yellow-400={color=="warning"}
    class:hover:bg-purple-800={color=="pop"} class:border-purple-900={color=="pop"} class:text-purple-500={color=="pop"}
    href="#">
        {button_name}
    </a>
{/if}
<style>
    a{
    letter-spacing: 0.5rem;
  }
</style>