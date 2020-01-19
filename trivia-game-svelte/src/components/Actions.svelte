<div class="actions">
  <slot></slot>
</div>

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
