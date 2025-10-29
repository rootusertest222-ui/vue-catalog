<script setup lang="ts">
import BaseIcon from '@/icons/BaseIcon.vue'
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <div class="sidebar-btn">
        <button class="action"><BaseIcon name="bars" />Каталог</button>
      </div>

      <router-link to="/home" class="logo action">
        <BaseIcon name="bag-shopping" size="lg" class="logo-icon" color="primary" />
        <span class="logo-text">ShopName</span>
      </router-link>

      <div class="search-bar">
        <input type="text" placeholder="Поиск товаров..." />
        <BaseIcon name="search" />
      </div>

      <div class="cart">
        <BaseIcon name="cart-shopping" />
        <span class="cart-count">3</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  box-shadow: $shadow-md;
  position: sticky;
  top: 0;
  padding: 10px 0;
}

.container {
  @include container;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.action {
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo {
  &:hover {
    color: $primary-dark;
  }

  .logo-icon {
    fill: currentColor;
  }

  .logo-text {
    color: inherit;
  }
}
</style>
