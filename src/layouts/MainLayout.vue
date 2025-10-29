<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <div>
    <TheSidebar />
    <main class="main">
      <router-view />
    </main>
  </div>
  <TheFooter />
</template>

<style lang="scss" scoped></style>
