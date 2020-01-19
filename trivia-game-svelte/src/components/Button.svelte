<button on:click={handleClick} class="btn">
  <slot></slot>
</button>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('onClick')
  }
</script>

<style>
.btn {
  @apply mt-4 mb-2 bg-blue-500 text-white font-bold py-2 px-4 rounded;
}

.btn:hover {
  @apply bg-blue-700;
}

@screen md {
  .btn {
    @apply mt-0 mb-0;
  }
}
</style>
