<script lang="ts" setup>
import Logo from '@/components/header/Logo.vue'
import CatalogMenu from '@/components/header/CatalogMenu.vue'
import SearchBar from '@/components/header/SearchBar.vue'
import Cart from '@/components/header/Cart.vue'
import Profile from '@/components/header/Profile.vue'

</script>

<template>
  <header class="header">
    <div class="container header-container">

      <div class="left-group">
        <Logo />
        <CatalogMenu />
      </div>

      <SearchBar />

      <div class="right-group">
        <Cart />
        <Profile />
      </div>

    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: $background;
  box-shadow: $shadow-md;
  position: sticky;
  top: 0;
  padding: 10px 0;
  z-index: 1000;

  .container {
    @include container;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-group {
      display: flex;
      gap: 25px;
      align-items: center;
    }

    .right-group {
      display: flex;
      gap: 25px;
      align-items: center;
    }
  }
}


</style>
