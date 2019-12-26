<template>
  <Container>
    <H1 data-testid='loading-header'>Loading...</H1>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import H1 from '../components/H1.vue'

export default {
  name: "Loading",
  components: {
    Container,
    H1
  }
}
</script>

<style>
  .container {
    @apply justify-center;
  }
</style>
