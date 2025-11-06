<script lang="ts" setup>
import TheHeader from '@/components/header/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main class="main">
    <div class="container">
      <router-view />
    </div>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped>
.container {
  @include container;
}

.main {
  min-height: 700px;
}
</style>
