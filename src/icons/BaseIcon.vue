<template>
  <svg
    v-if="iconSvg"
    class="icon"
    :class="[`icon--${size}`, color && `icon--${color}`]"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    v-html="iconSvg"
    preserveAspectRatio="xMidYMid meet"
  />
  <span v-else class="icon-missing">⚠️ {{ name }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Автоматический импорт всех SVG как строки
const icons = import.meta.glob('@/assets/icons/*.svg', { eager: true, query: '?raw' })
const localIcons: Record<string, string> = {}

for (const [path, mod] of Object.entries(icons)) {
  const name = path.split('/').pop()?.replace('.svg', '') || ''
  localIcons[name] = (mod as { default: string }).default
}

const props = defineProps<{
  name: string
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'danger'
    | 'success'
    | 'warning'
    | 'dark'
    | 'light'
    | 'text'
}>()

const iconSvg = computed(() => localIcons[props.name])
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: $dark; // черный по умолчанию
  transition: color 0.2s ease;

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  &--sm {
    width: 1rem;
    height: 1rem;
  }
  &--lg {
    width: 2rem;
    height: 2rem;
  }

  &--primary {
    color: $primary;
  }
  &--secondary {
    color: $secondary;
  }
  &--accent {
    color: $accent;
  }
  &--danger {
    color: $danger;
  }
  &--success {
    color: $success;
  }
  &--warning {
    color: $warning;
  }
  &--dark {
    color: $dark;
  }
  &--light {
    color: $light;
  }
  &--text {
    color: $text;
  }
}

.icon-missing {
  display: inline-block;
  font-size: 0.8rem;
  color: $danger;
}
</style>
