<script lang="ts" setup>
import IconSearch from '@/assets/icons/IconSearch.vue'
</script>

<template>
  <div class="search-bar">
    <input placeholder="Поиск товаров..." type="text" />
    <span><IconSearch class="svg-icon svg-icon--lg" /></span>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  flex: 1;
  max-width: 500px;
  margin: 0 20px;

  input {
    width: 100%;
    padding: 10px 16px;
    border: 1px solid #d1d5db;
    border-radius: $radii-md;
    font-size: 16px;
    transition: all $transition;

    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }

  span {
    position: absolute;
    right: 10px;
    top: 9px;
  }
}
</style>
