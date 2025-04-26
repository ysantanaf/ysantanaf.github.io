<template>
  <li class="experience-item">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <div class="image-container">
        <img :src="icon" :alt="alt" class="project-image">
        <div class="project-overlay">
          <h3 class="project-title">{{ title }}</h3>
          <p class="project-kind">{{ kind }}</p>
        </div>
      </div>
      <div class="project-meta">
        <time class="project-period">{{ period }}</time>
        <p class="project-description">{{ description }}</p>
      </div>
    </a>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ProjectItem',
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
    title: {
      type: String,
      required: true
    },
    kind: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
});
</script>

<style scoped>
.project-item {
  min-width: 100%;
  scroll-snap-align: center;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-link {
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.2);
  transition: all 0.3s ease;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  color: white;
}

.project-title {
  margin-bottom: 4px;
  font-weight: 500;
  background-color: var(--orange-yellow-crayola); /* Fondo del recuadro */
  color: #0D47A1;
  padding: 4px 8px; /* Espaciado interno */
  border-radius: 4px; /* Bordes redondeados */
  display: inline-block; /* Ajusta el tamaño al contenido */
}

.project-kind {
  font-size: 0.8rem;
  opacity: 0.8;
}

.project-meta {
  padding: 16px;
  background: var(--eerie-black-1);
  border: 1px solid var(--jet);
  border-top: none;
  border-radius: 0 0 12px 12px;
}

.project-period {
  display: block;
  font-size: 0.8rem;
  color: var(--orange-yellow-crayola);
  margin-bottom: 8px;
}

.project-description {
  font-size: 0.9rem;
  color: var(--light-gray);
  line-height: 1.4;
}

.project-item:hover {
  transform: translateY(-5px);
}

.project-item:hover .project-image {
  filter: grayscale(0);
  transform: scale(1.05);
}

@media (min-width: 450px) {
  .project-item {
    min-width: calc(50% - 10px);
  }
}

@media (min-width: 768px) {
  .project-item {
    min-width: calc(33.33% - 20px);
  }

  .image-container {
    height: 240px;
  }
}

@media (min-width: 1024px) {
  .project-item {
    min-width: calc(25% - 24px);
  }
}
</style>