<script lang="ts" setup>

import IconCart from '@/assets/icons/IconCart.vue'
</script>

<template>
  <button class="cart">
    <IconCart class="svg-icon svg-icon--lg" />
    <span class="cart-count">3</span>
  </button>
</template>

<style lang="scss" scoped>
.cart {
  position: relative;
  cursor: pointer;

  .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: $primary;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
