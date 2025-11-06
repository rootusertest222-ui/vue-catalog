<script lang="ts" setup>

import IconUser from '@/assets/icons/IconUser.vue'
</script>

<template>
  <router-link active-class="active" class="profile-link" to="/profile">
    <IconUser class="svg-icon svg-icon--lg" />
  </router-link>
</template>

<style lang="scss" scoped>
.profile-link {
  color: $text; // ← твой цвет текста
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all $transition;

  &:hover {
    color: $primary;
  }
}
</style>
