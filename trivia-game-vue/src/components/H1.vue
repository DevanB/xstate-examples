<template>
  <h1 class="h1">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "H1"
}
</script>

<style>
.h1 {
  @apply antialiased font-sans text-2xl font-bold text-gray-800 text-center;
}
</style>
