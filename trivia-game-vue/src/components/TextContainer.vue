<template>
  <div class="text-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TextContainer"
}
</script>

<style>
.text-container {
  @apply flex flex-col items-center my-4;
}
</style>
