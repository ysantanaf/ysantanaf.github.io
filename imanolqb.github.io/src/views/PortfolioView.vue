<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">{{ t('portfolio.title') }}</h2>
    </header>

    <ProjectFiltersSection />
    <ProjectSection />

    <div class="modal-container" data-modal-container>
      <div class="overlay" data-overlay></div>
      <section class="project-modal" data-project-modal>
        <button class="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="modal-content">
          <!-- Project details will be dynamically inserted here -->
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectSection from '@/components/portfolio/ProjectSection.vue';
import ProjectFiltersSection from '@/components/portfolio/ProjectFiltersSection.vue';
import ProjectItem from '@/components/portfolio/ProjectItem.vue';
import testImage from '@/assets/images/blog-5.jpg';

export default defineComponent({
  name: 'PortfolioView',
  components: {
    ProjectSection,
    ProjectFiltersSection,
    ProjectItem
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
      testImage
    };
  }
});
</script>

<style scoped>
.portfolio {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
  display: none;
}

.portfolio.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.article-title {
  position: relative;
  padding-bottom: 7px;
  color: var(--white-2);
  font-size: var(--fs-1);
  text-transform: capitalize;
  margin-bottom: 15px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 20;
  pointer-events: none;
  visibility: hidden;
}

.modal-container.active {
  pointer-events: all;
  visibility: visible;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 5%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 0.8;
  visibility: visible;
  pointer-events: all;
}

.project-modal {
  background: var(--eerie-black-2);
  position: relative;
  padding: 15px;
  margin: 15px 12px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  box-shadow: var(--shadow-5);
  transform: scale(1.2);
  opacity: 0;
  transition: var(--transition-1);
  z-index: 2;
  max-width: 800px;
  width: 90%;
}

.modal-container.active .project-modal {
  transform: scale(1);
  opacity: 1;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--onyx);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-2);
  font-size: 18px;
  opacity: 0.7;
  border: none;
  cursor: pointer;
}

.modal-close-btn:hover {
  opacity: 1;
}

@media (min-width: 580px) {
  .portfolio {
    padding: 30px;
    width: 520px;
    margin-inline: auto;
  }

  .article-title {
    padding-bottom: 15px;
    font-weight: var(--fw-600);
  }

  .article-title::after {
    width: 40px;
    height: 5px;
  }

  .project-modal {
    padding: 30px;
  }
}

@media (min-width: 768px) {
  .portfolio {
    width: 700px;
  }

  .project-modal {
    display: flex;
    gap: 25px;
  }
}

@media (min-width: 1024px) {
  .portfolio {
    width: 950px;
    box-shadow: var(--shadow-5);
  }
}

@media (min-width: 1250px) {
  .portfolio {
    width: auto;
    min-height: 100%;
  }
}
</style>