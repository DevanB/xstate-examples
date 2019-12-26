<template>
  <p class="p">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "P"
}
</script>

<style>
.p {
  @apply antialiased font-sans text-base font-normal text-gray-800 text-center;
}
</style>
