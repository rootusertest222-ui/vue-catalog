<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'


const isOpenCatalog = ref(false)
const catalogRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (catalogRef.value && !catalogRef.value.contains(event.target as Node)) {
    isOpenCatalog.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})


const openCatalog = () => {
  isOpenCatalog.value = true
}

const closeCatalog = () => {
  isOpenCatalog.value = false
}
</script>

<template>
  <div ref="catalogRef" class="catalog-menu">
    <button
      class="catalog-btn"
      @click="isOpenCatalog = !isOpenCatalog"
    >
      Каталог
      <span>▼</span>
    </button>
    <Transition name="slide">
      <ul v-if="isOpenCatalog" class="catalog-menu-list">
        <li><a href="#">Смартфоны и гаджеты</a></li>
        <li><a href="#">Ноутбуки и ПК</a></li>
        <li><a href="#">Телевизоры</a></li>
        <li><a href="#">Техника для дома</a></li>
        <li><a href="#">Фото и видео</a></li>
        <li><a href="#">Игровые приставки</a></li>
        <li><a href="#">Аудиотехника</a></li>
        <li><a href="#">Аксессуары</a></li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.catalog-menu {
  position: relative;
  display: inline-block;

  .catalog-btn {
    color: $text-white;
    font-size: 18px;
    background: $primary;
    padding: 8px 16px;
    border-radius: $radii-md;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all $transition;

    &:hover {
      background-color: $primary-dark;
    }

    &:focus {
      outline: 2px solid $border;
      outline-offset: 1px;
    }

    .catalog-arrow {
      font-size: 12px;
      transition: transform $transition;

      &--open {
        transform: rotate(180deg);
      }
    }
  }

  .catalog-menu-list {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: $shadow-lg;
    border-radius: $radii-md;
    padding: 8px 0;
    min-width: 280px;
    z-index: 1001;
    margin-top: 4px;
    border: 1px solid #e5e7eb;

    li {

      a {
        display: block;
        padding: 10px 20px;
        color: $text;
        transition: hover $transition;

        &:hover {
          background-color: $light-bg;
          color: $primary;
        }

        &:focus {
          background-color: #f1f5f9;
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.1s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
