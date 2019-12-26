<template>
  <div class="actions">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Actions"
}
</script>

<style>
.actions {
  @apply flex flex-col w-full justify-around;
}

@screen md {
  .actions {
    @apply flex-row w-1/2
  }
}
</style>
