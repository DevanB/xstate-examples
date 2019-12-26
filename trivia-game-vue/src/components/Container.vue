<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style>
.container {
  @apply flex flex-col justify-between items-center w-full h-full p-5;
}
</style>
