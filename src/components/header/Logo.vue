<script lang="ts" setup>

</script>

<template>
  <router-link class="logo action" to="/home">
    ShopName
  </router-link>
</template>

<style lang="scss" scoped>
.logo {
  font-size: 35px;
  color: $primary;
  transition: hover $transition;

  &:hover {
    color: $primary-dark;
  }
}

.action {
  display: flex;
  align-items: center;
  gap: 2px;
}

</style>
