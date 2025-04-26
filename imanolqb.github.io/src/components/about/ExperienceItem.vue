<template>
  <li class="experience-item">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <img :src="icon" :alt="alt">
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ExperienceItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
  },
});
</script>

<style scoped>
.experience-item {
  min-width: 100%;
  scroll-snap-align: center;
}

.experience-item img {
  filter: grayscale(1);
  transition: var(--transition-1);
  max-height: 200px;
  width: auto;
}

.experience-item img:hover {
  filter: grayscale(0);
}

@media (min-width: 450px) {
  .experience-item {
    min-width: calc(33.33% - 10px);
  }
}

@media (min-width: 580px) {
  .experience-item {
    min-width: calc(33.33% - 35px);
  }
}
</style>